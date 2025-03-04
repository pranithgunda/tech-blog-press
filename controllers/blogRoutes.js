// blog related render routes
const router = require('express').Router();
const { Op } = require('sequelize');
const { Blog, User, Feedback } = require('../models');


// get blog by id and render handlebar template
router.get('/:blogid', async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.blogid, {
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        })
        if (blogData) {
            const blog = blogData.get({ plain: true });
            res.render('providefeedback', { blog, logged_in: req.session.logged_in });
            return;
        }
        res.status(404).json({ message: 'Blog not found, please provide valid blog id' })
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// get feedback provided for blog by the user and render the blog along with comment and user info
router.get('/feedback/:blogid', async (req, res) => {
    try {
        const blogFeedback = await Feedback.findOne({
            where: {
                [Op.and]: [
                    { blog_id: req.params.blogid },
                    { user_id: req.session.user_id }
                ]
            },
            order: [['createdAt', 'DESC']],
            include: [{
                model: Blog,
                attributes: ['title', 'content', 'createdAt'],
                include: [{
                    model: User,
                    attributes: ['username']
                }]
            },
            ]
        })
        if (blogFeedback) {
            const feedback = blogFeedback.get({ plain: true });
            res.render('viewfeedback', { feedback, logged_in: req.session.logged_in, user_name: req.session.user_name });
            return;
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// get blog by id for update with no user info and render handlebar template
router.get('/update/:blogid', async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.blogid)
        if (blogData) {
            const blog = blogData.get({ plain: true });
            res.render('updatepost', { blog, logged_in: req.session.logged_in, user_id: req.session.user_id })
            return;
        }
        res.status(404).json({ message: 'Blog not found, please provide valid blog id' });
    }
    catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;