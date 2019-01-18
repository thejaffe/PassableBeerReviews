import * as shell from "shelljs";

shell.cp("-R", "src/views", "dist/");
shell.cp("-R", "src/public/images", "dist/public/images");
shell.cp("-R", "src/public/stylesheets", "dist/public/stylesheets");
