// api routes defined for user routes
const router = require('express').Router();
const { User } = require('../../models')

// method to login in a user
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                username: req.body.username
            }
        })
        if (!userData) {
            res.status(400).json({ message: 'No user found with username provided' })
            return;
        }

        const validPassword = await userData.comparePassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect email or password, please try again' });
            return;
        }
        // retrieve only data values of instance excluding metadata
        const user = userData.get({ plain: true });
        // save user information on session object
        req.session.save(() => {
            req.session.user_id = user.id;
            req.session.logged_in = true;
            req.session.user_name = user.username;
            res.status(200).json({ user: user, message: 'You are now logged in' });
        })
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
})


// method to signup a user
router.post('/signup', async (req, res) => {
    try {
        const newUser = await User.create({
            username: req.body.username,
            password: req.body.password
        });
        if (newUser) {
            // retrieve only data values of instance and exclude metadata
            const user = newUser.get({ plain: true });
            // save user information on session object
            req.session.save(() => {
                req.session.user_id = user.id;
                req.session.logged_in = true;
                req.session.user_name = user.username;
                res.status(200).json({ user: user, message: 'User profile created successfully' })
                return;
            })
        }
    }
    catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;