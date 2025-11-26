class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;

        // Cálculos imediatos
        this.categoria = this.calculaCategoria();
        this.imc = this.calculaIMC();
        this.mediaValida = this.calculaMediaValida();
    }

    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11) {
            return "Infantil";
        } else if (this.idade === 12 || this.idade === 13) {
            return "Juvenil";
        } else if (this.idade === 14 || this.idade === 15) {
            return "Intermediário";
        } else if (this.idade >= 16 && this.idade <= 30) {
            return "Adulto";
        } else {
            return "Sem categoria";
        }
    }

    calculaIMC() {
        return this.peso / (this.altura * this.altura);
    }

    calculaMediaValida() {
        // Ordena as notas
        let notasOrdenadas = this.notas.sort((a, b) => a - b);

        // Remove menor e maior
        let notasValidas = notasOrdenadas.slice(1, notasOrdenadas.length - 1);

        // Média
        let soma = notasValidas.reduce((total, nota) => total + nota, 0);
        return soma / notasValidas.length;
    }

    // Métodos de acesso solicitados
    obtemNomeAtleta() {
        return this.nome;
    }

    obtemIdadeAtleta() {
        return this.idade;
    }

    obtemPesoAtleta() {
        return this.peso;
    }

    obtemNotasAtleta() {
        return this.notas;
    }

    obtemCategoria() {
        return this.categoria;
    }

    obtemIMC() {
        return this.imc;
    }

    obtemMediaValida() {
        return this.mediaValida;
    }
}

// -------- EXEMPLO DE USO --------

const atleta = new Atleta(
    "Vitor Oliveira",
    37,
    80,
    1.77,
    [10, 9.34, 8.42, 10, 7.88]
);

console.log(`Nome: ${atleta.obtemNomeAtleta()}`);
console.log(`Idade: ${atleta.obtemIdadeAtleta()}`);
console.log(`Peso: ${atleta.obtemPesoAtleta()}`);
console.log(`Altura: ${atleta.altura}`);
console.log(`Notas: ${atleta.obtemNotasAtleta()}`);
console.log(`Categoria: ${atleta.obtemCategoria()}`);
console.log(`IMC: ${atleta.obtemIMC()}`);
console.log(`Média válida: ${atleta.obtemMediaValida()}`);
