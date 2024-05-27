const mongoose = require("mongoose");


const messageSchema = new Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }, content: {
        type: String,
        trim: true
    }, chat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "chat"
    }
})

const message = mongoose.model("message", messageSchema);
module.exports = { message }