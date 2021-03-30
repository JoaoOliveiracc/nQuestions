const express = require("express");
const app = express();

// Usa o ejs como template engine
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/:nome/:lang", (req, res) => {
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = true;
    var produtos = [
        {nome: "Doritos", preco: 3.34},
        {nome: "Coca-cola", preco: 5},
        {nome: "Leite", preco: 1.45},
        {nome: "Pão", preco: 2},
        {nome: "Bolacha", preco: 1.45}
    ];

    res.render("index", {
        nome: nome,
        lang: lang,
        msg: exibirMsg,
        produtos: produtos
    });
});

app.listen(3000, () => {
    console.log("Servidor iniciado!");
});