const router = require('express').Router();

// method to logout a user, render login page after user logsout
router.get('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.render('login');
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;


