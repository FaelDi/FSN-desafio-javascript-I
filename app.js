
let sistemaAlunos = require("./index");

var bodyParser = require('body-parser');

var express = require('express');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))

app.get('/alunos/listarAlunos', function (req, res) {
  res.send(sistemaAlunos.listarAlunos());
  console.log("Alunos listados");
});

app.get('/alunos/buscarAluno/:nome', function (req, res) {
    let nomeAluno = req.params.nome
    res.send(sistemaAlunos.buscarAluno(nomeAluno));
    console.log("Aluno buscado: "+req.params.nome);
  });

  app.post('/alunos/matricularAluno/:curso', function (req, res) {
     
    let aluno = req.body;
    let curso = req.params.curso; 
    console.log(aluno.nome);
    //res.send(sistemaAlunos.matricularAluno(aluno,curso));

    ( sistemaAlunos.matricularAluno(aluno,curso) ) ? res.send("Aluno: "+aluno.nome+" matriculado no curso: "+curso) : res.send("Aluno não encontrado!!");

    console.log("Aluno: "+aluno.nome);
    
  });

  app.post('/alunos/aplicarNota/:nota', function (req, res) {
     
    let aluno = req.body;
    let nota = req.params.nota; 
    console.log(aluno.nome);
    //res.send(sistemaAlunos.matricularAluno(aluno,curso));

    ( sistemaAlunos.aplicarNota(aluno,nota) ) ? res.send("Aluno: "+aluno.nome+" recebeu nota: "+nota) : res.send("Aluno não encontrado!!");

    console.log("Aluno: "+aluno.nome);
    
  });

  app.post('/alunos/aprovarAluno', function (req, res) {
     
    let aluno = req.body;
    
    console.log(aluno.nome);
    
    ( sistemaAlunos.aprovarAluno(aluno) ) ? res.send("Aluno: "+aluno.nome+" aprovado!") : res.send("Aluno não encontrado!!");

    console.log("Aluno: "+aluno.nome);
    
  });

  app.post('/alunos/aplicarFalta/', function (req, res) {
    let aluno = req.body;
    console.log(aluno.nome);
     
    ( sistemaAlunos.aplicarFalta(aluno) ) ? res.send("Aluno: "+aluno.nome+" levou falta!!") : res.send("Aluno não encontrado!!");

  });

  app.post('/alunos/adicionarAluno/', function (req, res) {
    let aluno = req.body;
    console.log(aluno.nome);
     
    ( sistemaAlunos.adicionarAluno(aluno) ) ? res.send("Aluno: "+aluno.nome+" foi adicionado!!") : res.send("Aluno não encontrado!!");

  });

//module.exports = {alunosDaEscola, listarAlunos, adicionarAluno, buscarAluno, aprovarAluno,aplicarFalta,aplicarNota,matricularAluno}


app.listen(8080, function () {
  console.log('Servidor ativo!!');
});