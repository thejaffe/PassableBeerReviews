import SendGrid = require("@sendgrid/mail");
import dotenv from "dotenv";
import { NextFunction, Request, Response, Router } from "express";
import { Mail } from "../classes/Mail";
import { asyncWrapper } from "../middleware/asyncWrapper";

const router: Router = Router();

dotenv.config();
SendGrid.setApiKey(process.env.SENDGRID_API_KEY);

// index route
router.get("/", (req: Request, res: Response) =>
  res.render("index.html"));

// article routes
router.get("/:article", (req: Request, res: Response) => res.render(req.params.article));

// beer review routes
router.get("/reviews/:beer", (req: Request, res: Response) => res.render(req.params.beer));

// send email route
router.post("/contact", asyncWrapper(async (req: Request, res: Response, next: NextFunction) => {

  const msg = await new Mail(req);

  await SendGrid.send(msg);
  res.render("success.html");
}));

export const Routes: Router = router;
