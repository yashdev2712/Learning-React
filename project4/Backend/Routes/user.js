const express = require("express");
const router = express.Router();
const z = require("zod");
const { user } = require("../models/UserSchema");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const JWT_SECRET = process.env.VITE_JWT_SECRET;


const signUpBody = z.object({
    userName: z.string(),
    email: z.string().email(),
    password: z.string()
})

router.post("/signup", async (req, res) => {
    const payload = signUpBody.safeParse(req.body);

    if (!payload.success) {
        return res.status(411).json({
            msg: "incorrect inputs",
            errors: payload.error.errors
        })
    }
    const existingUser = await user.findOne({
        userName: req.body.userName
    })

    if (existingUser) {
        return res.status(411).json({
            msg: "User already exists"
        })
    }

    const User = await user.create({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password
    })

    const userId = User._id;

    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.status(200).send({
        msg: "user created successfully",
        token: token
    })
})

const signInBody = z.object({
    userName: z.string(),
    password: z.string()
})

router.post("/signin", async (req, res) => {
    const payload = signInBody.safeParse(req.body);

    if (!payload.success) {
        res.status(411).send({
            msg: "incorrect input"
        })
    }

    const User = await user.findOne({
        userName: req.body.userName,
        password: req.body.password
    })

    if (User) {
        const token = jwt.sign({
            userId: User._id
        }, JWT_SECRET)
        res.status(200).send({
            token: token,
            msg: "user login success"
        })
        return
    }
    res.status(411).send({
        msg: "please create an account"
    })
})

// app.get("/message")


module.exports = router;