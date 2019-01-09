const express = require('express'),
      router  = express.Router(),
      sgMail = require('@sendgrid/mail'),
      sanitize  = require('sanitize-html');

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

router.get('/', (req, res) => res.render('index.html'));

router.get('/:article', (req, res) => res.render(req.params.article));

router.get('/reviews/:beer', (req, res) => res.render(req.params.beer));

router.post('/contact', (req, res) => {

  let msg = message(req);

      sgMail.send(msg, (error) => {
        if (error) {
          let {message} = error;
          res.render('error.html', { message: message });
        } else {
          res.render('success.html');
        }
      });
});

const message = (req) => {
  let first       = sanitize(req.body.first),
      last        = sanitize(req.body.last),
      email       = sanitize(req.body.email),
      suggestion  = sanitize(req.body.suggestion);

  let msg = {
    to: 'passablebeers@gmail.com',
    from: email,
    subject: `Beer Suggestion from ${first + ' ' + last}`,
    text: suggestion
  };

  return msg;
}

module.exports = router;
