import SendGrid = require("@sendgrid/mail");
import { Request, Response, Router } from "express";
import { Mail } from "../classes/Mail";
import { asyncWrapper } from "../middleware/asyncWrapper";
import { PublishedViews } from "../middleware/publishedViews";

const router: Router = Router();

const publishedViews = new PublishedViews();

SendGrid.setApiKey(process.env.SENDGRID_API_KEY);

// index route
router.get("/", (req: Request, res: Response) => res.render("index.html"));

// article routes
router.get("/:article", (req: Request, res: Response) => {

  const route = publishedViews.routeGenerator(req.params.article);

  if (publishedViews.validArticle(route)) {
    res.render(route);
  } else if (publishedViews.validReview(route)) {
    res.redirect(`/reviews/${route}`);
  } else {
    throw new Error("Cannot Get request page");
  }

});

// beer review routes
router.get("/reviews/:beer", (req: Request, res: Response) => {

  const route = publishedViews.routeGenerator(req.params.beer);

  if (publishedViews.validReview(route)) {
    res.render(route);
  } else {
    throw new Error("Cannot Get requested page");
  }

});

// send email route
router.post("/contact", asyncWrapper(async (req: Request, res: Response) => {

  const msg = await new Mail(req);
  await SendGrid.send(msg);

  res.render("success.html");
}));

router.get("*", asyncWrapper(async (req: Request, res: Response) => {

  await new Promise((resolve) => setTimeout(() => resolve(), 50));
  throw new Error("404 Cannot Get requested resource");

}));

router.all("*", asyncWrapper(async (req: Request, res: Response) => {

  await new Promise((resolve) => setTimeout(() => resolve(), 50));
  throw new Error("Unknown, this error has been reported");

}));

export const Routes: Router = router;
