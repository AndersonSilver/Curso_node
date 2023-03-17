const express = require("express") // Importando o Express
const app = express(); // Iniciando o Express


app.get("/",function(req,res){

    res.send("Bem vindo ao guia do programador");

});
app.get("/blog", function(req,res){

    res.send("Bem vind ao meu blog");

});
app.get("/youtube", function(req,res){
    res.send("Ola, seja bem vindo ao meu canal do youtube");
});



app.listen(3000,function(erro){

    if(erro){
        console.log("Aconteceu um erro, servidor nao foi aberto")
    }else{
        console.log("Servidor aberto com sucesso")
    }

})