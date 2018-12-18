const express = require("express");
const axios = require("axios");
const app = express();
const port = process.env.PORT || 5000;
let products = require("../react-demo/src/db/products");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/headphones", (req, res) => {
  res.json(products.HEADPHONES);
});
app.get("/phones", (req, res) => {
  res.json(products.PHONES);
});
app.get("/laptops", (req, res) => {
  res.json(products.LAPTOPS);
});
app.get("/cameras", (req, res) => {
  res.json(products.CAMERAS);
});

app.get("/headphone/:id", (req, res) => {
  const id = req.params.id;
  const item = products.HEADPHONES.find(i => i.id == id);
  res.json(item);
});
app.get("/phone/:id", (req, res) => {
  const id = req.params.id;
  const item = products.PHONES.find(i => i.id == id);
  res.json(item);
});
app.get("/laptop/:id", (req, res) => {
  const id = req.params.id;
  const item = products.LAPTOPS.find(i => i.id == id);
  res.json(item);
});
app.get("/camera/:id", (req, res) => {
  const id = req.params.id;
  const item = products.CAMERAS.find(i => i.id == id);
  res.json(item);
});
app.listen(port, () => console.log(`Listening on Port ${port}`));
