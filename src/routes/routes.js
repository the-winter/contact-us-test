let express = require("express");
let router = express.Router();

let path = require("path");
let User = require("../models/User");

let mongoose = require("mongoose");
const db = require("../../config/conenction");
let database = require("../../.secrets/database");
const uri = database.databaseStr;

router.get("/", (req, res) => {
    res.render("home");
});

// post form
router.post("/api/contact", (req, res) => {
    const { fname, lname, email, dob, mobile, address } = req.body;
    let errors = [];

    if (!fname || !lname || !email || !dob || !mobile) {
        errors.push({ msg: "Please fill in all fields" });
    }

    if (errors.length > 0) {
        // we dont want the form to completely clear
        res.render("home", {
            errors,
            fname,
            lname,
            email,
            dob,
            mobile
        });
    } else {
        const newUser = new User({
            fname,
            lname,
            email,
            address,
            dob,
            mobile
        });

        res.send("ok");
    }
});

module.exports = router;
