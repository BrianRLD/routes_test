const express = require("express");
const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");

const comments = [
  { username: "Todd", comment: "lol that is so funny!" },
  { username: "Skyler", comment: "I like to go birdwatching with my dog" },
  { username: "Sk8erBoi", comment: "Plz delete your account, Todd" },
  { username: "onlysayswoof", comment: "woof woof woof" },
];

app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

app.get("/tacos", (req, res) => {
  const { meat, qty } = req.query;
  res.send(`Here are your ${qty} ${meat} tacos!`);
  console.log(req.query);
});
