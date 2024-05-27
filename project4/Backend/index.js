const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const rootRouter = require("./Routes/index");
const mongoose = require("mongoose");

const app = express();

dotenv.config();

app.use(cors());


mongoose.connect(process.env.VITE_MONGOOSE_LINK)
    .then(() => {
        console.log("db connected succesfully");
    }
    )
    .catch((err) => {
        console.log("error while connecting to db:", err);
    })

app.get("/", (req, res) => {
    res.send("hii yashu")
});

app.use("/api/v1", rootRouter);



app.listen(process.env.VITE_PORT, () => {
    console.log("server is running");
    console.log(process.env.VITE_PORT);
})