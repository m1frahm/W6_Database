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
    //ATTENTION ON LINE 17
  console.log(books); // this is where the error started, i wanted my browser to show the books array and it only showed up in my terminal
     res.send("Hello");
});

export default router;
