const { Router } = require('express');
const HistoriesController= require('../controllers/histories_controllers');

const router = Router();

router.get('/:user_id', HistoriesController.GetHistory);

module.exports = router;