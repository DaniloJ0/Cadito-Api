const { Router } = require('express');
const ReviewsController= require('../controllers/reviews_controller.js');
const router = Router();

router.post('/', ReviewsController.CreateReview);
router.get('/', ReviewsController.GetReviews);

module.exports = router;