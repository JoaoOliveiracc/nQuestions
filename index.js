const express = require("express");
const app = express();

// Usa o ejs como template engine
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {

    res.render("index");
});

app.get("/perguntas", (req, res) => {
    app.render( );
})

app.listen(3000, () => {
    console.log("Servidor iniciado!");
});