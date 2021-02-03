// imports
import express from "express";
import mongoose from "mongoose";
import Messages from "./dbmessages.js";
import pusher from "pusher";

// api config
const app = express();

const port = process.env.PORT || 8080;

// middleware
app.use(express.json());

// db config
const connection_url = "mongodb+srv://admin:aRcRRwRcm6ajJAI8@cluster0.f7anb.mongodb.net/whatsapp_DB?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// pusher
const pusher = new Pusher({
    appId: "1149790",
    key: "3d0dc6da3b786599a8c2",
    secret: "7af322ce9c29cbb29335",
    cluster: "ap2",
    useTLS: true
});
  
pusher.trigger("my-channel", "my-event", {
message: "hello world"
});

// api routes
app.get("/", (req,res) => res.status(200).send("Timestamp: 2:12"));

app.post("/api/v1/messages/new", (req,res) => {
    const dbMessage = req.body;

    Messages.create(dbMessage, (err, data) => {
        if (err) {
            res.status(500).send(err); // internal server error : 500
        } else {
            res.status(201).send(`new message created: \n ${data}`); // 201: created
        };
    });
});

app.get("/api/v1/messages/sync", (req, res) => {
    Messages.find((err, data) => {
        if (err) {
            res.status(500).send(err); // internal server error : 500
        } else {
            res.status(200).send(data);
        }
    })
})

// listener
app.listen(port, () => console.log(`Listening on http//localhost:${port}`));