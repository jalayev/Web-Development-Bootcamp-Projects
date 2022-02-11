//jshint esversion:6
//use nodemon npm package to automatically restart server if any changes

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1 style='color: purple;'>Hello World!</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h2>Contact me at jalayev01@gmail.com</h2>");
});

app.get("/about", (req, res) => {
  res.send("<p>Here you will learn something about me!</p>");
});

app.get("/links", (req, res) => {
  res.send("<a href='https://www.google.com'>Link to google</a>");
});

app.listen(3000, () => {
  console.log("Server started on 3000");
});
