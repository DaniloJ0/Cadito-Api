const { Router } = require('express');
const UsersController= require('../controllers/users_controller.js');

const router = Router();

router.get('/', UsersController.GetUser);
router.post('/register', UsersController.register);
router.post('/login', UsersController.login);
router.post('/prev-login', UsersController.prevLogin);

module.exports = router;