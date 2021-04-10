const express = require("express");
const app = express();
const bodyParsrer = require("body-parser");
const connection = require("./database/database");
const Pergunta = require("./database/Pergunta");

// Database connection
connection.authenticate().then(() => {
    console.log("Conexão estabelecida!");
}).catch((msgErro) => {
    console.log(msgErro);
})

// Use ejs template engine
app.set("view engine", "ejs");
app.use(express.static("public"));

// Body parser
app.use(bodyParsrer.urlencoded({extended: false}));
app.use(bodyParsrer.json());

app.get("/", (req, res) => {
    Pergunta.findAll({raw: true, order: [
        ["id", "DESC"]
    ]}).then(perguntas => {
        res.render("index", {
            perguntas: perguntas
        });
    });
});

app.get("/pergunta", (req, res) => {
    res.render("perguntas");
});

app.post("/salvarpergunta", (req, res) => {
    var title = req.body.title;
    var description = req.body.description;

    Pergunta.create({
        titulo: title,
        descricao: description
    }).then(() => {
        res.redirect("/");
    });
});

app.listen(3000, () => {
    console.log("Servidor iniciado!");
});