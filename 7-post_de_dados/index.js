const express = require("express");
const app = express();
const port = 3000; //variavel ambiente
const path = require("path");

//ler o body

app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())

app.get('/users/add', (req, res) => {
    res.sendFile(`${basePath}/userForm.html`);
})

app.post('/users/save', (req, res) => {
   console.log(req.body);

   const name = req.body.name;
   const age = req.body.age;

    console.log(`O nome do usuário é ${name} e a idade é ${age}`);
   res.sendFile(`${basePath}/userForm.html`);

})

const basePath = path.join(__dirname, 'templates'); //nome da pasta que guarda os aquivos .html

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


