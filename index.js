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

// app.get("/api/books/:booksID", async (req, res) => {
//   // this get request lets you look for a specific book ID
//   console.log(req.params);
// });

app.get("/api/:booksID", cors(), async (req, res) => {
  // can do a for loop to access your array at position 3
  let requestedBook = req.params.bookID;
  console.log(requestedBook);
  for (let i = 0; i < books.length; i++) {
    console.log(books[3]);
  }
});

app.use(cors());

//copied post request from postman
// var myHeaders = new Headers();
// myHeaders.append("api-key", "<API Key>");

// // var raw = '{\n  "title": "The Four Agreements",\n  "author": "don Miguel Ruiz",\n  "genre": "self-help",\n  "yearPublished": 1997\n}';

// var requestOptions = {
//   method: "POST",
//   headers: myHeaders,
//   body: '{\n  "title": "The Four Agreements",\n  "author": "don Miguel Ruiz",\n  "genre": "self-help",\n  "yearPublished": 1997\n}',
//   redirect: "follow",
// };

// fetch("https://library-api.postmanlabs.com/books", requestOptions)
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.log("error", error));

const PORT = 4000;

app.listen(PORT, () => console.log(`Server for W6 Project ${PORT}`));
