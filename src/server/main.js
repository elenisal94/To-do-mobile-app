import express from "express";
import ViteExpress from "vite-express";
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
