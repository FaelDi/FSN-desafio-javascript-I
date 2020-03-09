// Base a ser utilizada
const alunosDaEscola=
[
    {
        nome:"Henrique",
        notas:[],
        cursos:[],
        faltas:5
    },
    {
        nome:"Edson",
        notas:[],
        cursos:[],
        faltas:2
    },
    {
        nome:"Bruno",
        notas:[10,9.8,9.6],
        cursos:[],
        faltas:0
    },
    {
        nome:"Guilherme",
        notas:[10,9.8,9.6],
        cursos:[
            {   
                nomeDoCurso:"Full Stack",
                dataMatricula:new Date
            }
        ]
        ,faltas:0
    },
    {
        nome:"Carlos",notas:[],
        cursos:[],
        faltas:0
    },
    {
        nome:"Lucca",
        notas:[10,9.8,9.6],
        cursos:[
            {
                nomeDoCurso:"UX",
                dataMatricula:new Date
            }
        ]
        ,faltas:0}
];
// implementação


function adicionarAluno(nome){
        let novoAluno =     
        {
            nome:nome,
            notas:[],
            cursos:[],
            faltas:0
        }

        let teste = alunosDaEscola.findIndex( element => element.nome == nome);
        if(teste == -1){
            alunosDaEscola.push(novoAluno);
            console.log(`Aluno: ${nome} adicionado`);
            return 1;
        }else{
            console.log('O aluno referido já esxiste');
            return 0;
        }
    }
   
    function listarAlunos(){
    /*Com essa função o usuário poderá ver todos os alunos cadastrados atualmente no sistema. 
    Vale dizer que As informações deverão ser exibidas em um formato amigável.*/   
    
        alunosDaEscola.forEach( elm => {
            console.log(`Nome: ${elm.nome} \n`);
            console.log(`Notas: \n`);
            for(let notas of elm.notas)
            {
                console.log(`${notas} \n`);
            }
            console.log(`Cursos: \n`);
            for(let curso of elm.cursos)
            {
                console.log(`${curso} \n`);
            }
            console.log(`faltas: ${elm.faltas}`);
        });
        return alunosDaEscola;
    }

    function buscarAluno(nome){
        /* Por meio dessa função, podemos pesquisar um aluno por nome na lista de aluno. Ela deverá exibir um feedback, tanto para quando encontrar o aluno, tanto quando não encontrar. E deverá devolver um aluno em seu retorno. */
        let teste = alunosDaEscola.findIndex( element => element.nome == nome );
        
        if(teste == -1 ){
            console.log("O aluno não existe!");
        }else{
            return alunosDaEscola[teste];
        }
   }
    function matricularAluno(aluno, curso){
    /* Essa funcionalidade irá permitir, cadastrar um aluno em um curso. 
    Essa função só poderá ser executada em um aluno já devidamente cadastrado no sistema, e deverá armazenar a data atual no momento da matricula
    Lembre-se de exibir o feedback para o usuário. */
        let teste = alunosDaEscola.findIndex( element => element.nome == aluno.nome );
        console.log(teste);
        if(teste == -1 ){
            console.log("O aluno não existe!");
            return 0;
        }else{
            alunosDaEscola[teste].cursos.push(curso);
            console.log(`Aluno: ${aluno.nome} matriculado no curso: ${curso}`);
            return 1;
        }
   }
    function aplicarFalta(aluno){
    /*
     Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá incrementar uma falta ao aluno. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar falta em aluno se o mesmo tiver matriculado em um curso.
    */
        let teste = alunosDaEscola.findIndex( element => element.nome == aluno.nome );

        if(teste == -1 ){
            console.log("O aluno não existe!");
            return 0;
        }else{
            alunosDaEscola[teste].faltas++;
            console.log(`Aluno: ${aluno.nome} recebeu uma falta!`);
            return 1;
        }
        
    }
    
    function aplicarNota(aluno,nota){
    /*
     Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá adicionar uma nota ao aluno na sua lista de notas. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar nota em aluno se o mesmo tiver matriculado em um curso.
    */
        
        let teste = alunosDaEscola.findIndex( element => element.nome == aluno.nome );
        if(teste == -1 ){
            console.log("O aluno não existe!");
            return 0;
        }else{
            alunosDaEscola[teste].notas.push(nota);
            console.log(`Aluno: ${aluno.nome} recebeu novas nota: ${nota}`);
            return 1;
        }
   }
   
     function aprovarAluno(aluno){
     /* 
     Ao receber um aluno devidamente cadastrado em nossa lista, deverá dizer se o mesmo está aprovado ou não. Os critérios de aprovação são: ter no máximo 3 faltas e média 7 em notas.
     Só o aluno só poderá ser aprovado se o mesmo tiver matriculado em um curso.
     */
        let teste = alunosDaEscola.findIndex( element => element.nome == aluno.nome );
        if(teste == -1 ){
            console.log("O aluno não existe!");
            return 0;
        }else{
            let aluno = alunosDaEscola[teste];
            if(aluno.faltas <= 3 ){
                const reducer = (accumulator, currentValue) => accumulator + currentValue;
                if(aluno.notas.reduce(reducer)/3 >= 7){
                    console.log("Alunos aprovado");
                    return 1;
                }else{
                    console.log("Aluno não atingiu média 7");
                    
                }
            }else{
                console.log(`O aluno passou do limite de faltas`);
            }
            
            
        }

     }


module.exports = {alunosDaEscola, listarAlunos, adicionarAluno, buscarAluno, aprovarAluno,aplicarFalta,aplicarNota,matricularAluno}
// TESTES 

//console.log(buscarAluno("Henrique"));

let henrique = {
    nome:"Henrique",
    notas:[],
    cursos:[],
    faltas:5
} 


//aplicarFalta(henrique);

//console.log(buscarAluno("Henrique"));

/////////////////////////////////////

//adicionarAluno("Rafael");
//adicionarAluno("Henrique");

/*listarAlunos();


console.log(buscarAluno("Henrique"));
aplicarNota(henrique,10);
aplicarNota(henrique,7);
aplicarNota(henrique,6);
aprovarAluno(henrique);
console.log(buscarAluno("Henrique"));*/