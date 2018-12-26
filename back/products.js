// const express = require("express");
// const axios = require("axios");
// const app = express();
// const bodyParser = require("body-parser");
// const port = process.env.PORT || 5000;
// let products = require("../react-demo/src/db/products");
// const path = require("path");
// const fs = require("fs");

// app.use(express.static(path.join(__dirname, "public")));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// // products
// app.get("/headphones", (req, res) => {
//   res.json(products.HEADPHONES);
// });
// app.get("/phones", (req, res) => {
//   res.json(products.PHONES);
// });
// app.get("/laptops", (req, res) => {
//   res.json(products.LAPTOPS);
// });
// app.get("/cameras", (req, res) => {
//   res.json(products.CAMERAS);
// });

// // selected item
// app.get("/headphones/:id", (req, res) => {
//   const id = req.params.id;
//   const item = products.HEADPHONES.find(i => i.id == id);
//   res.json(item);
// });

// // writing a review
// app.post("/headphones/:id", (req, res) => {
//   fs.readFile("../react-demo/src/db/products.json", function(err, data) {
//     let json = JSON.parse(data);
//     const id = req.params.id;
//     const item = products.HEADPHONES.find(i => i.id == id);
//     const review = { user: req.body.user, text: req.body.text };
//     item.reviews.unshift(review);
//     fs.writeFile(
//       "../react-demo/src/db/products.json",
//       JSON.stringify(products),
//       function(err) {
//         if (err) throw err;
//       }
//     );
//   });
// });

// app.get("/phones/:id", (req, res) => {
//   const id = req.params.id;
//   const item = products.PHONES.find(i => i.id == id);
//   res.json(item);
// });
// app.get("/laptops/:id", (req, res) => {
//   const id = req.params.id;
//   const item = products.LAPTOPS.find(i => i.id == id);
//   res.json(item);
// });
// app.get("/cameras/:id", (req, res) => {
//   const id = req.params.id;
//   const item = products.CAMERAS.find(i => i.id == id);
//   res.json(item);
// });

// app.listen(port, () => console.log(`Listening on Port ${port}`));
