const {Router} = require('express')

const router = Router();

router.get('/', (_req, res) => {
  res.json({ message: 'First Steps' });
});

module.exports = router;