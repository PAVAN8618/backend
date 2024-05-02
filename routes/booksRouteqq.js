const express = require("express");
const router = express.Router();

const Book = require("../models/Book");

let books = [
  { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 2, title: "1984", author: "George Orwell" },
  { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 4, title: "Pride and Prejudice", author: "Jane Austen" },
  { id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger" },
];

router.get("/", (req, res) => {
  res.json(books);
  console.log(books);
});

router.get("/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));

  if (!book) return res.sendStatus(400).send("Book not found");

  res.json(book);
});

router.post("/", (req, res) => {
  const { title, author } = req.body;
  const id = books.length + 1;
  const newBook = new Book(id, title, author);
  books.push(newBook);
  res.sendStatus(201).json(newBook);
});

router.put("/:id", (req, res) => {
  const { title, author } = req.body;
  const book = find((b) => b.id === parseInt(req.params.id));
  if (!book) return res.sendStatus(400).send("Book not found");

  book.title = title;
  book.author = author;
  res.json(book);
});

router.delete("/:id", (req, res) => {
  const bookIndex = books.findIndex((b) => b.id === parseInt(req.params.id));

  if (bookIndex === -1) return res.status(404).send("Book not found");

  books.splice(bookIndex, 1);
  res.sendStatus(204);
});

module.exports = router;
