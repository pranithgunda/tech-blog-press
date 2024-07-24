const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const blogRoutes = require('./blogRoutes');
const userRoutes = require('./userRoutes');

router.use('/',homeRoutes);
router.use('/blog',blogRoutes);
router.use('/user',userRoutes);
router.use('/api',apiRoutes);

module.exports = router;