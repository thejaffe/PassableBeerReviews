// load modules
import bodyParser  = require("body-parser");
import compression = require("compression");
import ejs         = require("ejs");
import express     = require("express");

// load local modules
import {Routes} from "./routes/routes";

const app: express.Application  = express();
const PORT: number              = +(process.env.PORT) || 8080;

// set up modules
app.set("view engine", "html");
app.engine("html", ejs.renderFile);
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());
app.use(Routes);

app.listen(PORT);
