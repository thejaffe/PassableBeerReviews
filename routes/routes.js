const express = require('express'),
      router  = express.Router(),
      helpers = require('./helpers');

router.get('/', (req, res) => res.render('index.html'));

router.get('/:article', (req, res) => res.render(req.params.article));

router.get('/reviews/:beer', (req, res) => res.render(req.params.beer));

router.post('/contact', (req, res) => {
  let first       = helpers.sanitize(req.body.first),
      last        = helpers.sanitize(req.body.last),
      email       = helpers.sanitize(req.body.email),
      suggestion  = helpers.sanitize(req.body.suggestion),

      message     = helpers.mailSuggestion(first, last, email, suggestion) ?
                    error : "Success";

      res.render('submission.html', { message });
});

module.exports = router;
