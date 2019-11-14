require("dotenv").config();
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { pageRouter } = require("./routes");

const app = express();

app.set("views", path.join(__dirname, "html"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "css")));
app.use(express.static(path.join(__dirname, "node_modules")));
app.use(express.static(path.join(__dirname, "public")));

// Set the view engine to ejs
app.set("view engine", "ejs");

app.use("/", pageRouter);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, function() {
  console.log("Server has started successfully.");
});
