"use strict";
class Aluno {
    constructor(nome, idade, nota) {
        this.nome = nome;
        this.idade = idade;
        this.notaAluno = nota;
    }
    inscricaoAluno() {
        if (this.idade > 18) {
            return 'Nao autorizado!';
        }
        return 'Autorizado!';
    }
    adicionarNota(nv) {
        this.notaAluno += nv;
    }
}
let alunoTal = new Aluno("Tchuda", 18, 1);
alunoTal.adicionarNota(5);
console.log('Infor :: ', alunoTal);
console.log(alunoTal.inscricaoAluno());
let alunX;
alunX = new Aluno('Ana', 20, 20);
alunX.adicionarNota(3);
console.log(alunX.inscricaoAluno());
console.log('AlunoAna ::: ', alunX);
