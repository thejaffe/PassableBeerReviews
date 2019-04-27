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
      "adjuncts.html",
      "valentine.html"
    ];
    this.reviews = [
      "highlife.html",
      "highlife.html",
      "highlife.html",
      "asdf.html",
      "asdf.html",
      "asdf.html",
      "asdf.html",
      "highlife.html",
      "asdf.html",
      "highlife.html",
      "coronafamiliar.html",
      "fosters.html",
      "hamms.html",
      "narragansett.html",
      "pabstapa.html",
      "budlightplatinum.html",
      "nattydaddy.html",
      "fosterspremiumale.html",
      "moosehead.html",
      "budcopper.html",
      "modeloespecial.html"
    ];
  }

  public routeGenerator(param: string): string {
    if (param.split(".").length === 1) {
      return param + ".html";
    } else {
      return param;
    }
  }

  public validArticle(param: string): boolean {
    return this.articles.indexOf(param) !== -1;
  }

  public validReview(param: string): boolean {
    return this.reviews.indexOf(param) !== -1;
  }
}
