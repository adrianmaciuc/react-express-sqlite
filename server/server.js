require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

// api testing routes
const api = require("./api");

// middleware
app.use(express.static(path.join(__dirname)));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  // cors()
  cors({
    origin: [
      "https://z.martioli.com",
      "http://localhost:5173",
      "react-express-sqlite.railway.internal",
    ],
  })
);

app.set("view engine", "hbs");

// import api routes. runs the file ./api and sets routes defined
app.use("/", api);

app.listen(process.env.PORT || 9000, () => {
  console.log("Runnin backend on http://localhost:9000");
});
