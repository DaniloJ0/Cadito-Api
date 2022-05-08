const {Router} = require('express');
const CartController = require('../controllers/carts_constroller');

const router = Router();

router.get('/', CartController.GetCart);
router.get('/add', CartController.GetCart);
router.get('/remove', CartController.GetCart);   

module.exports = router; 
