const path = require("path");

const express = require("express");

const router = express.Router();

const rootPath = require("../utils/getRootPath")
console.log(rootPath)
//======= Custom Paths Start
//? home

router.get("/", (req, res, next) => {
  res
    .status(200)
    .sendFile(path.join(rootPath, "views", "home", "home.html"));
});

//? contact-us

router.get("/contact", (req, res, next) => {
  res
    .status(200)
    .sendFile(path.join(rootPath, "views", "contact", "contact.html"));
});
//? contact-list
router.post("/contact-data", (req, res, next) => {
  res
    .status(200)
    .sendFile(path.join(rootPath, "apis", "contact-data.js"));
});

// ============ Custom Paths ENDS

// Handle Unhandled requests
router.use((req, res, next) => {
  //# can omit path as it not required
  res
    .status(404)
    .sendFile(path.join(__dirname, "../", "views", "404", "404.html")); // using path.join() instead of concating directly slashed path so that this could work for both linux and windows path
});

module.exports = router;
