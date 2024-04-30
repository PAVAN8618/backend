const express = require("express");

const bodyParser = require("body-parser");

const booksRoute = require("./routes/booksRouteqq");
const app = express();

const PORT = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//   res.send("this is my first");
// });

app.use(bodyParser.json());

app.use("/api/books", booksRoute);

// app.use((req, res) => {
//   res.send("hi ");
// });

app.listen(PORT, (req, res) => {
  console.log(`server is running on ${PORT}`);
});
