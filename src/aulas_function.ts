class Aluno implements IAluno {
    nome: string;
    idade: number;
    notaAluno: number;

    constructor(nome: string,idade: number, nota: number){
        this.nome = nome;
        this.idade = idade;
        this.notaAluno = nota;
    }
    inscricaoAluno(): string {
       if(this.idade > 18){
        return 'Nao autorizado!';
       }
       return 'Autorizado!'
    }
    adicionarNota(nv: number): void {
        this.notaAluno += nv
    }

}

interface IAluno {
    adicionarNota(nv: number):void
    inscricaoAluno(): string;
}

let alunoTal: Aluno = new Aluno("Tchuda", 18 ,1)
alunoTal.adicionarNota(5)
console.log('Infor :: ', alunoTal)

console.log(alunoTal.inscricaoAluno())

let alunX: Aluno 
alunX = new Aluno('Ana',20, 20)
alunX.adicionarNota(3)

console.log(alunX.inscricaoAluno()) 





console.log('AlunoAna ::: ',alunX)
