const express = require("express") // Importando o Express
const app = express(); // Iniciando o Express


app.get("/",function(req,res){

    res.send("<h1>Bem vindo ao guia do programador</h1>");
    // SEND => Função que envia dado para o usuario
});

app.get("/blog/:artigo?", function(req,res){

    let artigo = req.params.artigo;

    if(artigo){
        res.send("Artigo" + artigo + "")
    }else{
        res.send("Bem vindo ao meu blog");
    }

});

app.get("/youtube", function(req,res){
    res.send("Ola, seja bem vindo ao meu canal do youtube");
});
app.get("/majo/:nome/:empresa", function(req,res){
    //req => Dados enviado pelo usuario
    //res => Resposta enviada para o usuario

    // res.send("Ola, seja bem vindo ao meu canal do youtube");

    let empresa = req.params.empresa
    let nome = req.params.nome 
    res.send("Ola " + nome + " tudo bem? sou da empresa " + empresa );

});



app.listen(3000,function(erro){

    if(erro){
        console.log("Aconteceu um erro, servidor nao foi aberto")
    }else{
        console.log("Servidor aberto com sucesso")
    }

})