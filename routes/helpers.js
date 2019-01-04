const sanitizeHtml  = require('sanitize-html'),
      nodeMailer    = require('nodemailer');



module.exports = {
  sanitize: req => sanitizeHtml(req),

  mailSuggestion: (first, last, email, suggestion) => {

    let transporter = {
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'passablebeers@gmail.com',
        pass: '#PassableBeersAreBeersToo'
      }
    };

    let mailOpts = {
      replyTo: email,
      to: 'passablebeers@gmail.com',
      subject: `Beer Suggestion from ${first + ' ' + last}`,
      text: suggestion
    };

    console.log(email);

    let mailer = nodeMailer.createTransport(transporter);

    mailer.sendMail(mailOpts, (error, response) => error);
  }
}
