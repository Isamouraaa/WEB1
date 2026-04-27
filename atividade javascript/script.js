class Aluno {
    constructor(nome,idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

let a1 = new Aluno("Isabelle",19);
let a2 = new Aluno("Isabella",20);
let a3 = new Aluno("Victor",30);

let alunos = [a1, a2, a3];

console.log("1.Adicionar aluno\n2.Listar alunos\n3.Buscar aluno\n4.Alterar aluno\n5.Remover aluno");
let escolha = prompt("O que deseja fazer?");

if (escolha == 1) {
    let aluno = prompt("Insira o nome do aluno para adicionar.")
    alunos.push(aluno)
    console.log("Nova lista:")
    alunos.forEach(a => console.log(a))
}

else if (escolha == 2) {
    printAlunos();
}

else if (escolha == 3) {
    buscaAluno();
}

else if (escolha == 4) {
}

else {
    let aluno = prompt("Insira o nome do aluno para remover.")
    alunos.splice()
}

function printAlunos() {
    alunos.forEach(a => console.log(a.nome," ",a.idade," anos"));
}

function buscaAluno() {
    let aluno = prompt("Qual aluno você quer buscar?");
    for (let a in alunos) {
        if (a.nome == aluno) {
            return true;
        }
    }
}