const {Router} = require('express');
const CartController = require('../controllers/carts_controllers');

const router = Router();

router.get('/', CartController.GetCart);
router.post('/add', CartController.AddCart);
router.delete('/remove', CartController.RemoveCart);   
router.post('/purchase', CartController.PurchaseCart);   

module.exports = router; 
