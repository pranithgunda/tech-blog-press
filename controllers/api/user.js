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

        // save user information on session object
        req.session.save(() => {
            req.session.user_id = userData.username;
            req.session.logged_in = true;

            res.status(200).json({ user: userData, message: 'You are now logged in' });
        })
    }
    catch (err) {
        res.status(400).json(err);
    }
})

// method to logout a user
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

// method to signup a user
router.post('/signup', async (req, res) => {
    try {
        const newUser = await User.create({
            username: req.body.username,
            password: req.body.password
        });
        if (newUser) {
            req.session.user_id=newUser.username;
            req.session.logged_in=true;
            res.status(200).json({ user: newUser, message: 'User profile created successfully'})
            return;
        }
    }
    catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;