const { Router } = require('express');
const ReviewsController= require('../controllers/reviews_controllers.js');

const router = Router();

router.get('/', ReviewsController.GetReviews);
router.post('/create', ReviewsController.CreateReview);

module.exports = router;
