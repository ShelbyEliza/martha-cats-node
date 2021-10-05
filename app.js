const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.listen(3000);

app.use(express.static("public"));
app.use(express.static("images"));

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.get("/seneca", (req, res) => {
  res.render("seneca", { title: "Seneca", name: "Seneca" });
});

app.get("/freya", (req, res) => {
  res.render("freya", { title: "Freya", name: "Freya" });
});

app.get("/nico", (req, res) => {
  res.render("nico", { title: "Nico", name: "Nico" });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
