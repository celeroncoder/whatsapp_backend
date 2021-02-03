import mongoose from "mongoose";

// db schema 

const whatsappSchema = mongoose.Schema({
    message: String,
    name: String,
    timeStamp: String,
    received: Boolean
});

export default mongoose.model("messagecontent", whatsappSchema);