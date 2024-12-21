class Hero {
    constructor(nome, idade, classe) {
        this.nome = nome;
        this.idade = idade;
        this.classe = classe
    }

    atacar() {
        const conte = this.classe.length;
        console.log(conte);
    }
}

// Inicializando a lista de classes fora do construtor
const classesDisponiveis = ["Guerreiro", "Mago", "Monge", "Ninja"];

// Criando uma instância da classe Hero
let b = new Hero("Mauricio", 12, "Mago");

// Chamando o método atacar da instância 'b'
b.atacar(); // Isso imprimirá 4, pois a propriedade classe é uma string e sua propriedade 'length' não corresponde ao comprimento da lista de classes.
//Alguns pontos importantes:

//Construtor: Use constructor e inicialize as propriedades com os valores fornecidos.

//Método atacar: O método atacar deve acessar this.classe e calcular a quantidade de caracteres da classe fornecida.

//Chamada do método: Use a instância criada (b) para chamar o método atacar.

//Com essas correções, seu código deve funcionar corretamente e imprimir o comprimento da propriedade classe da instância Hero. Teste e veja se isso atende às suas necessidades! Se precisar de mais alguma ajuda, estarei aqui. 😊

