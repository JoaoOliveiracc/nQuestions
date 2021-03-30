const express = require("express");
const app = express();

// Usa o ejs como template engine
app.set("view engine", "ejs");

app.get("/:nome/:lang", (req, res) => {
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = true;

    res.render("index", {
        nome: nome,
        lang: lang,
        msg: exibirMsg
    });
});

app.listen(3000, () => {
    console.log("Servidor iniciado!");
});