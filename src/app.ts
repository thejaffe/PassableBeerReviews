import bodyParser from "body-parser";
import compression from "compression";
import ejs from "ejs";
import express from "express";
import helmet from "helmet";
import favicon from "serve-favicon";

import { errorHandler} from "./middleware/errorHandler";
import { Routes } from "./routes/routes";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    this.app.use(helmet());
    this.app.use(compression());
    this.app.set("views", __dirname + "/views");
    this.app.set("view engine", "ejs");
    this.app.engine("html", ejs.renderFile);
    this.app.use(express.static(__dirname + "/public"));
    this.app.use(favicon(__dirname + "/public/images/favicon.ico"));

    this.app.use(bodyParser.urlencoded({ extended: false }));

    this.app.use(Routes);
    this.app.use(errorHandler);
  }
}

export default new App().app;
