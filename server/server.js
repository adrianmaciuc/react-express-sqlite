require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

// api testing routes
const api = require("./api");

// middleware
app.use(express.static(path.join(__dirname)));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "hbs");

// import api routes. runs the file ./api and sets routes defined
app.use("/", api);

app.listen(process.env.PORT || 9000, () => {
  console.log("Runnin backend on http://localhost:9000");
});
