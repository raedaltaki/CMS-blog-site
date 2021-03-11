const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

router.use('/posts',userRoutes);
router.use('/posts',postRoutes);
router.use('/posts',commentRoutes);

module.exports = router;