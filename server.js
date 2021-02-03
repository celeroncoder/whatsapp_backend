// imports
import express from "express";
import mongoose from "mongoose";

// api config
const app = express();

const port = process.env.PORT || 8080;

// middleware

// db config

// api routes
app.get("/", (req,res) => res.status(200).send("Timestamp: 2:12"));

// listner
app.listen(port, () => console.log(`Listening on http//localhost:${port}`));