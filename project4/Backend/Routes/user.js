const express = require("express");
const router = express.Router();
const z = require("zod");

const createUser = z.object({
    userName: z.string(),
    email: z.string(),
    password: z.string()
})

router.post("/signup", (req, res) => {
    const payload = createUser.safeParse(req.body);

    if (!payload) {
        return res.status(411).json({
            msg: "incorrect inputs"
        })
    }



})


module.exports = router;