import app from "./app";

const PORT: number = +process.env.PORT || 8080; // default port to listen

app.listen(PORT);
