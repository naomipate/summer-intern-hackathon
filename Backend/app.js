const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

let accountController = require("./controllers/accountController");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello! Welcome to your Account!");
});

app.use("/transactions", accountController);

app.get("*", (req, res) => {
  res.status(404).json({ message: "page not found" });
});

module.exports = app;
