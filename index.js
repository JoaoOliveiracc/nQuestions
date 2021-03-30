const express = require("express");
const app = express();

// Usa o ejs como template engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(3000, () => {
    console.log("Servidor iniciado!");
});