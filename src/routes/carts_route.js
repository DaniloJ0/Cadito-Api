const {Router} = require('express');
const CartController = require('../controllers/carts_controllers');

const router = Router();

router.get('/', CartController.GetCart);
router.get('/add', CartController.AddCart);
router.get('/remove', CartController.RemoveCart);   
router.get('/purchase', CartController.PurchaseCart);   

module.exports = router; 
