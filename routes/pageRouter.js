const express = require("express");
const router = express.Router();


// index page
router.get("/", function(req, res) {
  console.log("Request for home recieved");
  res.render("home");
});

// landing page
router.get("/home", function(req, res) {
  console.log("Request for home recieved");
  res.render("home");
});

// about page
router.get("/about", function(req, res) {
  console.log("Request for about page recieved");
  res.render("about");
});

// gallery page
router.get("/gallery", function(req, res) {
  console.log("Request for main gallery recieved");
  res.render("gallery");
});

//sub gallery pages

router.get("/bigCats", function(req, res) {
  res.render("bigCats");
});

router.get("/birdsOfPrey", function(req, res) {
  res.render("birdsOfPrey");
});

router.get("/britishBirds", function(req, res) {
  res.render("britishBirds");
});

router.get("/cats", function(req, res) {
  res.render("cats");
});

router.get("/dogs", function(req, res) {
  res.render("dogs");
});

router.get("/horses", function(req, res) {
  res.render("horses");
});

router.get("/wildAnimals", function(req, res) {
  res.render("wildAnimals");
});

// prices page
router.get("/prices", function(req, res) {
  console.log("Request for prices recieved");
  res.render("prices");
});

//contact page
router.get("/contact", function(req, res) {
  console.log("Request for contact page recieved");
  res.render("contact");
});

module.exports = router;
