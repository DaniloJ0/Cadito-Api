const { Router } = require('express');
const PostsController= require('../controllers/post_controllers.js');

const router = Router();

router.get('/', PostsController.GetPosts);
router.post('/create', PostsController.CreatePost);
router.get('/recent', PostsController.GetRecentPosts);

module.exports = router;


