const express = require("express");
const app = express();
const bodyParsrer = require("body-parser");

// Usa o ejs como template engine
app.set("view engine", "ejs");
app.use(express.static("public"));

// Body parser
app.use(bodyParsrer.urlencoded({extended: false}));
app.use(bodyParsrer.json());

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/pergunta", (req, res) => {
    res.render("perguntas");
});

app.post("/salvarpergunta", (req, res) => {
    var title = req.body.title;
    var description = req.body.description;

    res.send("Formulário recebido! Título: " + title + " Descrição: " + description);
});

app.listen(3000, () => {
    console.log("Servidor iniciado!");
});