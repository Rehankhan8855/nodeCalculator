const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/rehan", (req, res) => {
  res.send("Hi, I am Rehan");
});

router.get("/about", (req, res) => {
  res.send("Hi, I am About Page");
});

router.get("/home", (req,res) =>{
  res.send("Hi, I am Home Page");
});

router.get("/contact",(req,res) =>{
  res.send("Hi, I am Contact Page")
});

router.get('/calculate', calculatorcontroller.calculate);
module.exports = router;
