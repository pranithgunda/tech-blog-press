// api routes defined for blog
const router = require('express').Router();
const { Blog, Feedback } = require('../../models');

// post method to create a new blog
router.post('/', async (req, res) => {
    try {
        const newBlog = await Blog.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id
        });
        if (newBlog) {
            res.status(200).json({ blog: newBlog, message: 'New blog created sucessfully' });
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// put method to update a blog
router.put('/:blogid', async (req, res) => {
    try {
        const updateBlog = await Blog.update({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id
        }, {
            where: {
                id: req.params.blogid
            }
        })
        if (updateBlog > 0) {
            res.status(200).json({ message: 'Blog updated successfully' });
            return;
        }
        res.status(404).json({ message: 'Blog not found, please provide valid blog id' })
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// delete method for blog deletion
router.delete('/:blogid', async (req, res) => {
    try {
        const deleteBlog = await Blog.destroy({
            where: {
                id: req.params.blogid
            }
        })
        if (deleteBlog > 0) {
            res.status(200).json({ message: 'Blog deleted successfully' });
            return;
        }
        res.status(404).json({ message: 'Blog not found, please provide valid blog id' });
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// post method to add a feedback
router.post('/feedback', async (req, res) => {
    try {
        const newFeedback = await Feedback.create({
            comment: req.body.comment,
            blog_id: req.body.blog_id,
            user_id: req.session.user_id
        })
        if (newFeedback) {
            res.status(200).json({ message: 'Feedback added successfully' });
            return;
        }
    }
    catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;