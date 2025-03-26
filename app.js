const express = require('express');//import
var app = express();
const port = 3000;
//const router = express.Router()
const pessoa = require('./pessoa.json') 
console.log(pessoa)



// bloco de chamada das rotas do projeto
app.get('/',(req,res) => {
    console.log(`Rota raiz encontrada !`)
    res.send('<h3>Rota encontrada !</h3>')
});
// rota pessoa
app.get('/pessoa/:cod',(req,res) => {
    let codigo = req.params.cod
    console.log(`Lendo \n !`,pessoa[codigo])
    //res.send('<h3>Rota encontrada !</h3>')
    return res.json(pessoa[codigo])
});
//




app.get('/sobre',(req,res) => {
    console.log(`Rota sobre encontrada !`)
    res.send('<h3>Rota sobre encontrada !</h3>')
});


app.get('/contato',(req,res) => {
    console.log(`Rota contatos encontrada !`);
    res.render('contato.ejs', {
        title:'contato'
    })
});

// caso não encontrado
app.get('*',(req,res) => {
    console.log(`Página não encontrada 404 !`);
    res.send('<h3>Página não encontrada</h3><p>ERRO 404!</p>');

    
});



//instanciar o servidor

try {
    app.listen(port, () => {
        console.log(`servido rodando na porta ${port}`);
    });
}catch (error){
    console.log(`Ocorreu ERRO ao carregar o servidor! `);
}