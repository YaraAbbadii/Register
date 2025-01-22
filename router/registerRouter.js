const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const express = require("express");
const registerController= require("../controller/registerController");
const router = express.Router();

router.post("/register", registerController.register);
router.get("/register", registerController.GETregister);

module.exports = router;
