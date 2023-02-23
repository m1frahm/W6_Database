const express = require("express");
const cors = require("cors");
const books = require("./books.js");
const app = express();

// app.get("/api/books", (req, res) => {
//   let books = {
//     title: "A Court of Thorns and Roses",
//     author: "Sarah J. Mass",
//     format: "Kindle",
//   };
//   res.json(books);
// });

app.get("/", (req, res) => {
  res.json("Checking to see if message will print on screen");
});

app.get("/api/books", (req, res) => {
  res.json(books);
});

app.use(cors());

const PORT = 4000;
app.listen(PORT, () => console.log(`Server for W6 Project ${PORT}`));
