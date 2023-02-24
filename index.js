import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.listen(PORT, () =>
  console.log(`Server Running on port: http://localhost:${PORT}`)
);

app.get("/", (req, res) => res.send("Hello from Homepage."));

// const express = require("express");
// const cors = require("cors");
// //const books = require("./books.js"); uncomment this
// const app = express();

// // const books = [
// //     {
// //       isbn: "0553120441",
// //       title: "Harry Potter and the Sorcerer's Stone",
// //       author: "J.K. Rowling",
// //       format: "Paperback",
// //     },
// //     {
// //       isbn: "0679889175",
// //       title: "Harry Potter and the Chamber of Secrets",
// //       author: "J.K. Rowling",
// //       format: "Paperback",
// //     },
// //     {
// //       isbn: "9780857660282",
// //       title: "Harry Potter and the Prisoner of Azkaban",
// //       author: "J.K. Rowling",
// //       format: "Paperback",
// //     },
// //     {
// //       isbn: "0553096095",
// //       title: "Harry Potter and the Goblet of Fire",
// //       author: "J.K. Rowling",
// //       format: "Hardcover",
// //     },
// //     {
// //       isbn: "05530962356",
// //       title: "Harry Potter and the Order of the Phoenix",
// //       author: "J.K. Rowling",
// //       format: "Hardcover",
// //     },
// //     {
// //       isbn: "0553098976",
// //       title: "Harry Potter and the Half-Blood Prince",
// //       author: "J.K. Rowling",
// //       format: "Hardcover",
// //     },
// //     {
// //       isbn: "0553093476",
// //       title: "Harry Potter and the Deathly Hallows",
// //       author: "J.K. Rowling",
// //       format: "Hardcover",
// //     },
// //     {
// //       isbn: "0553115634",
// //       title: "A Court of Thorns and Roses",
// //       author: "Sarah J. Maas",
// //       format: "Hardcover",
// //     },
// //     {
// //       isbn: "0553115765",
// //       title: "A Court of Mist and Fury",
// //       author: "Sarah J. Maas",
// //       format: "Hardcover",
// //     },
// //     {
// //       isbn: "05531324567",
// //       title: "A Court of Wings and Ruin",
// //       author: "Sarah J. Maas",
// //       format: "Hardcover",
// //     },
// //     {
// //       isbn: "05531324511",
// //       title: "A Court of Silver Flames",
// //       author: "Sarah J. Maas",
// //       format: "Hardcover",
// //     },
// //   ];

// //module.exports = BOOKS;

// // app.get("/api/books", (req, res) => {
// //   let books = {
// //     title: "A Court of Thorns and Roses",
// //     author: "Sarah J. Mass",
// //     format: "Kindle",
// //   };
// //   res.json(books);
// // });

// app.get("/", (req, res) => {
//   res.json("Checking to see if message will print on screen");
// });

// app.get("/api/books", (req, res) => {
//   res.json(books);
// });

// // app.get("/api/books/:booksID", async (req, res) => {
// //   // this get request lets you look for a specific book ID
// //   console.log(req.params);
// // });

// app.get("/api/:booksID", cors(), async (req, res) => {
//   // can do a for loop to access your array at position 3
//   let requestedBook = req.params.bookID;
//   console.log(requestedBook);
//   for (let i = 0; i < books.length; i++) {
//     console.log(books[3]);
//   }
// });

// app.use(cors());

// // app.post("/api/books", cors(), (req, res) => {

// //     const book = req.body; // body will contain what you do in your put request
// //     console.log(req);
// //     books.push(book);
// //    // res.send(`${book.title}`)
// //     console.log(book);
// // });

// //copied post request from postman
// // var myHeaders = new Headers();
// // myHeaders.append("api-key", "<API Key>");

// // // var raw = '{\n  "title": "The Four Agreements",\n  "author": "don Miguel Ruiz",\n  "genre": "self-help",\n  "yearPublished": 1997\n}';

// // var requestOptions = {
// //   method: "POST",
// //   headers: myHeaders,
// //   body: '{\n  "title": "The Four Agreements",\n  "author": "don Miguel Ruiz",\n  "genre": "self-help",\n  "yearPublished": 1997\n}',
// //   redirect: "follow",
// // };

// // fetch("https://library-api.postmanlabs.com/books", requestOptions)
// //   .then((response) => response.text())
// //   .then((result) => console.log(result))
// //   .catch((error) => console.log("error", error));

// const PORT = 4000;

// app.listen(PORT, () => console.log(`Server for W6 Project ${PORT}`));
