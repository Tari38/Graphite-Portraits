require("dotenv").config();
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { pageRouter } = require("./routes");
// const { contact } = require("./routes");

const app = express();

app.set("views", path.join(__dirname, "html"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "css")));
app.use(express.static(path.join(__dirname, "node_modules")));
app.use(express.static(path.join(__dirname, "public")));

// Set the view engine to ejs
app.set("view engine", "ejs");

// app.use("/contact", contact);
app.use("/", pageRouter);

app.listen(3000, () => {
  console.log("Server is running at localhost:3000");
})
