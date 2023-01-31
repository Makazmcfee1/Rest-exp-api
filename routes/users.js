import express from "express";

const router = express.Router();

const users = [
    {
        firstName: "john",
        lastName: "doe",
        age: 25
    }
]

//all routes here are starting with /users
router.get("/", (req, res) => {
    console.log(users);
    res.send("Hello from users homepage")});

export default router;