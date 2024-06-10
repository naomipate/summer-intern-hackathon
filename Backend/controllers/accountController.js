const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

let accountModel = require("../models/accountModel");

// READ ONLY
router.get("/", (req, res) => {
  res.json(accountModel);
});

// READ ONLY BY ID
router.get("/:id", (req, res) => {
  const { id } = req.params;

  const match = accountModel.find((item) => item.id === id);

  if (!match) {
    res.status(404).json({
      status: false,
      message: "Id not found",
    });
  } else {
    res.json(match);
  }
});

// CREATE NEW ACCOUNT ITEM
router.post("/", (req, res) => {
  const accountItem = req.body;

  if (!accountItem) {
    res.status(400).json({
      status: false,
      message: "You cannot create an empty account item",
    });
  } else {
    const newAccountItem = {
      id: uuidv4(),
      ...accountItem,
    };
    console.log("This is working", newAccountItem);
    accountModel.push(newAccountItem);

    res.status(201).json(newAccountItem);
  }
});

// DELETE ACCOUNT ITEM BY ID
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  let foundIndex = accountModel.findIndex((item) => item.id === id);

  if (foundIndex === -1) {
    res
      .status(404)
      .json({ status: false, message: "sorry, no todo with this id is found" });
  } else {
    let foundAccountItem = accountModel[foundIndex];

    let newAccount = accountModel.filter((item) => item.id !== id);

    accountModel = newAccount;

    res.json(foundAccountItem);
  }
});

// UPDATE ACCOUNT ITEM BY ID
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const foundIndex = accountModel.findIndex((item) => item.id === id);

  if (foundIndex === -1) {
    res.status(404).json({ status: false, message: "Id not found!" });
  } else {
    let foundAccountItem = accountModel[foundIndex];

    let newObj = {
      ...foundAccountItem,
      ...req.body,
    };

    accountModel.splice(foundIndex, 1, newObj);

    res.json(newObj);
  }
});

router.get("*", (req, res) => {
  res.status(404).json({ message: "page not found" });
});

module.exports = router;
