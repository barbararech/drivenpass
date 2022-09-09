import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import "express-async-errors";
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware";

import authRouter from "./routes/authRouter";
import credentialsRouter from "./routes/credentialsRouter";
import safeNotesRouter from "./routes/safeNotesRouter";
import cardsRouter from "./routes/cardsRouter";

dotenv.config();

const app = express();
app.use(cors());
app.use(json());

app.use(authRouter);
app.use(credentialsRouter);
app.use(safeNotesRouter);
app.use(cardsRouter);


app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log("Server On!"));
