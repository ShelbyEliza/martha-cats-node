const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.listen(3000);

app.use(express.static("public"));
app.use(express.static("images"));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Cats of Martha",
    name: "Cats of Martha",
    number: "are",
  });
});

app.get("/seneca", (req, res) => {
  res.render("seneca", { title: "Seneca", name: "Seneca", number: "is" });
});

app.get("/freya", (req, res) => {
  res.render("freya", { title: "Freya", name: "Freya", number: "is" });
});

app.get("/nico", (req, res) => {
  res.render("nico", { title: "Nico", name: "Nico", number: "is" });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
