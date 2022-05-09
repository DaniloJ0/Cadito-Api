const { Router } = require('express');
const ReviewsController= require('../controllers/reviews_controllers.js');

const router = Router();

router.post('/', ReviewsController.CreateReview);
router.get('/', ReviewsController.GetReviews);

module.exports = router;
