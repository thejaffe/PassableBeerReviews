import { NextFunction, Request, Response } from "express";

// Error handler
export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  if (err.message.includes("Cannot Get") || err.message.includes("lookup view")) {
    res.status(404).render("error.html",
                {title: "404 Not Found", message: err.message});
  } else {
    res.status(500).render("error.html",
                {title: "500 Error", message: err.message});
  }
}
