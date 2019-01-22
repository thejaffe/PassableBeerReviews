import app from "./app";

const PORT: number = +(process.env.SERVER_PORT) || 8080; // default port to listen

app.listen(PORT);
