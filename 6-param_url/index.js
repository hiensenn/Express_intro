const express = require("express");
const app = express();
const port = 3000; //variavel ambiente
const path = require("path");

const basePath = path.join(__dirname, 'templates');

app.get('/users/:id', (req, res) => { 
    const id = req.params.id

    //leitura da tabela users e resgatar um usuário

    console.log(`estamos buscando o usuário ${id}`);


    res.sendFile(`${basePath}/users.html`); // criar a nova rota acima da rota principal "/"
})

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`);
})

app.listen(port, () => {
    console.log(`App rodando da porta ${port}`);
})

