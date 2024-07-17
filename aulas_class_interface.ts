class Pessoa2 implements IPessoa {
    nome: string;
    apleido: string;
    idade: number;

    constructor(n: string, a: string, i: number){
        this.nome = n;
        this.apleido = a;
        this.idade = i;
    }

    fazerAniversario(): void {
       this.idade ++;
    }
    saudacao(): void {
       console.log(`Seja bem-vindo a aulas sr/a ${this.nome} ${this.apleido}`)
    }
}

interface IPessoa {
    fazerAniversario(): void;
    saudacao(): void;
}

let filemena = new Pessoa2('Filo', 'Co', 5)
console.table(filemena)
console.log('Idade :: ',filemena.idade)
filemena.fazerAniversario()
console.table(filemena)
console.log('Idade :: ',filemena.idade)
filemena.saudacao()



