

/**
 * Variáveis
 */

//tipos primitivos: boolean, number, string
let ligado: boolean = false;
let nome: string = "André";
let idade: number = 30;
let altura: number = 1.75; // nao preciso definir se é inteiro ou decimal, o typescript ja entende

//tipos especiais: null, undefined
let nulo: null = null;
let indefinido: undefined = undefined;

//tipo abrangentes: any, void
let retorno: void; //void é um tipo que não retorna nada, usado em funções que não retornam nada
let retornoView: any = "qualquer coisa"; //any é um tipo que pode receber qualquer valor, usado quando não se sabe o tipo de dado que será recebido

//objeto - sem predizibilidade de tipos, pode receber qualquer tipo de dado
let produto: object = {
  name: "Anderson",
  cidade: "SP",
  idade: 49,
};

//objeto - com predizibilidade de tipos, pode receber apenas os tipos de dados definidos
type ProdutoLoja = {
  nome: string;
  preco: number;
  unidades: number;
};

let meuProduto: ProdutoLoja = {
  nome: "Notebook",
  preco: 2500,
  unidades: 5,
};
/**
 * arrays
 */
let dados: string[] = ["André", "Maria", "José"]; //array de strings 
let dados2: Array<string> = ["André", "Maria", "José"]; //array de strings, outra forma de declarar

//arrays multi types
let infos: (string | number)[] = [30, "André", 1.75]; //array de strings e números

/**
 * Tuplas - array com tamanho e tipos fixos 
 */

let boleto: [string, number, number] = ["agua", 199.9, 123456789]; //tupla com 3 elementos, sendo o primeiro uma string, o segundo um número e o terceiro um número


/**
 * arrays métodos
 */
dados.map((item) => `O nome é ${item}`); //map é um método que percorre o array e retorna um novo array com os valores modificados

/**
 * datas
 */

dados.pop(); //pop é um método que remove o último elemento do array
let aniversario: Date = new Date("2026-09-02 05:00"); //Date é um tipo que representa uma data e hora
console.log(aniversario.toString()); //toString é um método que converte a data para string

