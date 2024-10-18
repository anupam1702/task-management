const express = require("express");

const router = express.Router();

// Define the home route
router.get("/", (req, res) => {
    res.send("Hello from home route");
});

module.exports = router;
