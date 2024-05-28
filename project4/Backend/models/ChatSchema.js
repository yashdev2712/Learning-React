const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const chatSchema = new mongoose.Schema({
    groupName: {
        type: String,
        minLenght: 3,
        maxLenght: 10
    }, isGroupChat: {
        type: Boolean,
        default: false
    }, users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
    ], latestMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "message"
    },
    groupAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
})

const chat = mongoose.model("chat", chatSchema);

module.exports = { chat }