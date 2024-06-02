const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const rootRouter = require("./Routes/index");
const mongoose = require("mongoose");
const { Server } = require("socket.io");
const http = require("http");
const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

const server = http.createServer(app);

const io = new Server(server);

io.on("connection", (socket) => {
    console.log("user Connected");
    console.log("id:", socket.id);
});

mongoose.connect(process.env.VITE_MONGOOSE_LINK)
    .then(() => {
        console.log("db connected successfully");
    })
    .catch((err) => {
        console.log("error while connecting to db:", err);
    });

app.get("/", (req, res) => {
    res.send("hii yashu");
});

app.use("/api/v1", rootRouter);

const PORT = process.env.VITE_PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
