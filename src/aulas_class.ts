class Pessoa implements IPessoa {
    
    nome: string = '';
    apelido: string = '';
    idade: number = 0;
    sexo: string = '';
    dataDeNacimento: string = '';

    saudacao(): void {
        console.log(`Seja Bemvindo ${this.nome}`)
    }
    fazerAniversario(): void {
        throw new Error("Method not implemented.");
    }
}

interface IPessoa {
    saudacao(): void;
    fazerAniversario(): void;
}

let pesoaFulano: Pessoa;

pesoaFulano = new Pessoa();
pesoaFulano.nome = 'Amilcar'
pesoaFulano.apelido = 'Tchuda'
pesoaFulano.idade = 20
pesoaFulano.sexo = 'M'
pesoaFulano.dataDeNacimento = '01-05-2021';

pesoaFulano.saudacao()

console.log('Pessoa :: ',pesoaFulano)