import { MailData } from "@sendgrid/helpers/classes/mail";
import sgMail   = require("@sendgrid/mail");
import { Request, Response, Router } from "express";
import sanitize = require("sanitize-html");

const router: Router = Router();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// index route
router.get("/", ({}, res: Response) => {
    return res.render("index.html");
});

// article routes
router.get("/:article", (req: Request, res: Response) => res.render(req.params.article));

// beer review routes
router.get("/reviews/:beer", (req: Request, res: Response) => res.render(req.params.beer));

const message = (req: Request) => {

  const first: string       = sanitize(req.body.first);
  const fromAddress: string = sanitize(req.body.email);
  const last: string        = sanitize(req.body.last);
  const suggestion: string  = sanitize(req.body.suggestion);
  const toAddress: string   = "passablebeers@gmail.com";

  const data: MailData = {
    from: fromAddress,
    subject: `Beer Suggestion from ${ first + " " + last }`,
    text: suggestion,
    to: toAddress,
  };

  return data;

};

// send email route
router.post("/contact", (req: Request, res: Response) => {

  const msg: MailData = message(req);

  sgMail.send(msg)
  .then(() => {
    res.render("success.html");
  })
  .catch((error: boolean) => {
    res.render("error.html", { message: error });
  });

});

export const Routes: Router = router;
