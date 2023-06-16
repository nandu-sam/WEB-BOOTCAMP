//jshint esversion:6
const express = require("express");

const date = require(__dirname + "/date.js");

const app = express();

let items = ["Buy food", "Eat food", "Cook food"];

const workItems = [];

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

app.use(express.json()); // To parse the incoming requests with JSON payloads

app.get("/", function (req, res) {
  let day = date.getDate();

  res.render("list", {
    listTitle: day,

    newListItems: items,
  });
});

app.post("/", (req,res) => {
  const item = req.body.newItem;

  if (req.body.list === "work") {
    workItems.push(item);

    res.redirect("/work");
  } else {
    items.push(item);

    res.redirect("/");
  }
});
app.get("/work", (req, res) => {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.post("/work", (req, res) => {
  const item = req.body.newItem;

  workItems.push(item);

  res.redirect("/work");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
