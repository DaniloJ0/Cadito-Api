const { Router } = require('express');
const HistoriesController= require('../controllers/histories_controller.js');

const router = Router();

router.get('/:user_id', HistoriesController.GetHistory);

module.export = router;