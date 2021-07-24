let express = require('express');
let app = express();
const data = require("./data.json"); // data.json é aonde estão os dados

//Verbos HTTP
//GET - Receber
//POST - inserir
//PUT - atualizar
//DELETE - deletar


// esse /clients é um endpoint
app.get('/clients', function(req, res){
    //res.send('OPA, ROTA GET');
    res.json(data)
});

//usar /:id para buscar um cliente expecífico atravez do id dele
app.get('/clients/:id', function(req, res){
    const {id} = req.params;
    const cliente = data.find(cli => cli.id == id);

    if(!cliente)
        return res.status(204).json();

    res.json(cliente);
});

app.post('/clients', function(req, res){
    const {name, email} = req.body; //adicionar os demais campos para salvar

    //rotina para salvar

    res.json({name, email}); //devolver o nome e o email
});

app.put('/clients/:id', function(req, res){
    
    const {id} = req.params;
    const cliente = data.find(cli => cli.id == id);
    
    if(!cliente)
        return res.status(204).json();

    const { username } = req.body; // pegar o novo nome
    cliente.username = username; // atualizar o nome

    req.json(cliente);
});

app.delete('/clients/:id', function(req, res){
    res.json(data)
});











//Iniciar o servidor na porta 3000
app.listen(3000, function(){
    console.log('ALOHA!!');
});