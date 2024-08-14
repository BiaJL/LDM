const express = require('express')
const index = express()

index.listen (8081, function(){
    console.log ('Servidor ativo!')
})

index.get('/', function(req, res){
    res.send('Home')
})

index.get ('/cadastro/:nome/:sobrenome/:idade', function(req,res){
    res.set('Content-Type', 'text/plain');
    res.send('Cadastro: \nNome: '+ req.params.nome + '\nSobrenome: ' + req.params.sobrenome + '\nidade: ' + req.params.idade)
})