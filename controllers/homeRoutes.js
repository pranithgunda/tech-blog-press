const router = require('express').Router();
const { Blog, User, Feedback } = require('../models');

// get all blogs for homepage
router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });
        const blogs = blogData.map((blog) =>
            blog.get({ plain: true }));
        res.status(200).json(blogs);
    }
    catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// get all blogs for a user

router.get('/:userid', async (req, res) => {
    try {

        const userBlogData = await Blog.findAll({
            where: {
                user_id: req.params.userid
            },
            include: [
                {
                    model: User,
                    attributes: ['username'],
                }
            ]
        })
        const userBlogs = userBlogData.map((userBlog)=>userBlog.get({ plain: true }));
        res.status(200).json(userBlogs);
    }
    catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;