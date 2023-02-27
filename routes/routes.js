

const express = require("express");
const router = express.Router();



const homeController = require('./../controllers/homeController')
const contactUsController = require('../controllers/contactUsController')
const errorController = require('../controllers/errorController')
//======= Custom Paths Start
//? home

router.get("/", homeController.home);

//? contact-us

router.get("/contact",contactUsController.contactPage);
//? contact-list
router.post("/contact-data",contactUsController.handleContactUs);

// ============ Custom Paths ENDS

// Handle Unhandled requests
router.use(errorController.get404Page);

module.exports = router;
