const { Router } = require('express');
const PostsController = require('../controllers/post_controller.js');

const router = Router();

router.post('/', PostsController.CreatePost);
router.get('/', PostsController.GetPosts);
router.get('/recent', PostsController.GetRecentPosts);

module.exports = router;