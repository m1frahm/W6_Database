const express = require("express");
const cors = require("cors");

const app = express();

app.get("/api/books", (req, res) => {
  let books = {
    title: "A Court of Thorns and Roses",
    author: "Sarah J. Mass",
    format: "Kindle",
  };
  res.json(books);
});

app.use(cors());

const PORT = 4000;
app.listen(PORT, () => console.log(`Server for W6 Project ${PORT}`));
