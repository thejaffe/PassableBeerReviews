const express = require('express');
      router  = express.Router();

router.get('/', (req, res) => res.render('index.html'));

router.get('/:article', (req, res) => res.render(req.params.article));

router.get('/reviews/:beer', (req, res) => res.render(req.params.beer));

module.exports = router;
