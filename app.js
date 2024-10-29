const express = require("express");
const morgan = require("morgan");
const port = 3000;

const app = express();

app.set("view engine", "ejs");

// middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get(
  "/",
  (req, res, next) => {
    console.log("Middleware for root route");
    next();
  },
  (req, res) => {
    res.render("index");
  }
);

app.get("/about", (req, res) => {
  res.send("This is About Page ");
});

app.get("/profile", (req, res) => {
  res.send("Profile page");
});

app.post("/get-form-data", (req, res) => {
  console.log(req.body);
  res.send("Data received successfully");
});

app.listen(port, (req, res) => {
  console.log("Server is running on port" + port);
});
