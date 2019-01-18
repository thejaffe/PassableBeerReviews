import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const PORT: number = +(process.env.SERVER_PORT) || 8080; // default port to listen

app.listen( PORT, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ PORT }` );
});
