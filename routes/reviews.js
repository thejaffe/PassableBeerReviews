const express = require('express');
      router  = express.Router();

router.get('/reviews/:beer', function(req, res) {
  res.render(req.params.beer);
});

module.exports = router;
