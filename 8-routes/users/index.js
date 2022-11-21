const express = require("express");
const router = express.Router();
const path = require("path");

const basePath = path.join(__dirname, '../templates');

router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/userForm.html`);
})

router.post('/save', (req, res) => {
   console.log(req.body);

   const name = req.body.name;
   const age = req.body.age;

    console.log(`O nome do usuário é ${name} e a idade é ${age}`);
   res.sendFile(`${basePath}/userForm.html`);

})

router.get('/:id', (req, res) => { 
    const id = req.params.id

    //leitura da tabela users e resgatar um usuário

    console.log(`estamos buscando o usuário ${id}`);


    res.sendFile(`${basePath}/users.html`); // criar a nova rota acima da rota principal "/"
})


module.exports = router;