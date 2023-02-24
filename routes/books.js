import express from "express";

const router = express.Router();

const books = [
  {
    isbn: "000111222333",
    title: "First Book Test",
    author: "First Author Test",
    format: "First Format Test",
  },
];

//all routes in here are starting with /books
router.get("/", (req, res) => {
  console.log(books);
  res.send("Hello");
});

export default router;
