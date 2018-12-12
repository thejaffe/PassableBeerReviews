const express = require('express');
      router  = express.Router();

router.get('/', function(req, res) {
  res.render('index.html');
});

router.get('/:article', function(req, res) {
  res.render(req.params.article);
});

module.exports = router;
