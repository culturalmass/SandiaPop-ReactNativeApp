import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import router from "./router";
require("dotenv").config();

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(5080, () => {
  console.log("Server running on https//localhost:5080/");
});

mongoose.Promise = Promise;
const URI = process.env.MONGODB_URI;
if (!URI) {
  console.log("MONGODB_URI is not defined");
}
mongoose.connect(URI);
mongoose.connection.on("error", (error: Error) => console.log(error));

app.use("/", router());
