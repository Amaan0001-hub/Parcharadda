const express = require("express");
const { submitForm } = require("../controller/contactController");

const router = express.Router();

router.post("/contact", submitForm);

module.exports = router;
