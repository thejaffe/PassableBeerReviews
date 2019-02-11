import { NextFunction, Request, Response } from "express";

export class PublishedViews {
  public articles: string[];
  public reviews: string[];

  constructor() {
    this.articles = [
      "index.html",
      "about.html",
       "favoritebeers.html",
       "contact.html",
       "reviews.html",
       "adjuncts.html"
     ];
    this.reviews = [
      "coronafamiliar.html",
      "fosters.html",
      "hamms.html",
      "narragansett.html",
      "pabstapa.html",
      "budlightplatinum.html",
      "nattydaddy.html"
    ];
  }

  public validArticle(param: string): boolean {
    return this.articles.indexOf(param) !== -1;
  }

  public validReview(param: string): boolean {
    return this.reviews.indexOf(param) !== -1;
  }
}
