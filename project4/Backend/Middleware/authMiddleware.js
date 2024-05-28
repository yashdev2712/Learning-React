const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const JWT_SECRET = process.env.VITE_JWT_SECRET;

export const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.auhtorization;

    if (!authHeader || authHeader.lenght == 0) {
        return res.status(403).send({
            msg: "auth header not found"
        })
    }

    const token = authHeader.split("")[1];
    try {
        const decode = jwt.verify(token, JWT_SECRET);
        req.userId = decode.userId;
        next();
    }
    catch (err) {
        console.log("Error:", err);
    }

} 