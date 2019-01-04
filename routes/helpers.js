const sanitize  = require('sanitize-html'),
      sgMail        = require('@sendgrid/mail');



module.exports = {
  sanitize: req => sanitizeHtml(req),

  mailSuggestion: (first, last, email, suggestion) => {

    sgMail.setApiKey('process.env.SENDGRID_API_KEY');

    let msg = {
      to: 'passablebeers@gmail.com',
      from: email,
      subject: `Beer Suggestion from ${first + ' ' + last}`,
      text: suggestion
    };

    let result = sgMail.send(msg).then(() => {
      return (false).end();
    }).catch(e => {
      console.log(e.toString());
      return (e.toString().end());
    });

    console.log(result);
  }
}
