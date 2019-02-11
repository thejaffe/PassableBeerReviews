import * as shell from "shelljs";

shell.cp("-R", "src/public/images", "dist/public/images");
shell.cp("-R", "src/public/*.xml", "dist/public");
shell.cp("-R", "src/public/*.txt", "dist/public");
shell.cp("-R", "src/public/*.htm", "dist/public");
shell.cp("-R", "src/views", "dist/views");

//remove when done building scss file
shell.cp("-R", "src/public/stylesheets/style.css", "dist/public/stylesheets");
