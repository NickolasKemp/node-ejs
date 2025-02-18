const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.sendFile(__dirname + "/../public/index.html");
});

router.get("/mykola", (req, res) => {
    const student = {
        name: "Алладін Ібн Ясін",
        age: 19,
        github: "https://github.com/NickolasKemp",
    };
    res.render("student", { student });
});

router.get("/illia", (req, res) => {
    const student = {
        name: "Ілля",
        age: 19,
        github: "https://github.com/IlliaFaolritana",
    };
    res.render("student", { student });
});

router.get("/stas", (req, res) => {
    const student = {
        name: "Станіслав",
        age: 18,
        github: "https://github.com/layn1asol",
    };
    res.render("student", { student });
});

router.get("/ivan", (req, res) => {
    const student = {
        name: "Іван",
        age: 18,
        github: "https://github.com/ip34is",
    };
    res.render("student", { student });
});

module.exports = router;
