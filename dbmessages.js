import mongoose from "mongoose";

// * db schema 

const whatsappSchema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean
});

// TODO: Change the mongoDB access settings to get data from the configured IP not from anywhere.

export default mongoose.model("messagecontent", whatsappSchema);