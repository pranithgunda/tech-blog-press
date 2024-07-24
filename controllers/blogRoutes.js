const router = require('express').Router();
const { Blog, User } = require('../models');

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
            res.render('feedback', { blog,logged_in:req.session.logged_in });
            return;
        }
        res.status(404).json({ message: 'Blog not found, please provide valid blog id' })
    }
    catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;