"use strict";
/**
 * Variáveis
 */
Object.defineProperty(exports, "__esModule", { value: true });
//tipos primitivos: boolean, number, string
let ligado = false;
let nome = "André";
let idade = 30;
let altura = 1.75; // nao preciso definir se é inteiro ou decimal, o typescript ja entende
//tipos especiais: null, undefined
let nulo = null;
let indefinido = undefined;
//tipo abrangentes: any, void
let retorno; //void é um tipo que não retorna nada, usado em funções que não retornam nada
let retornoView = "qualquer coisa"; //any é um tipo que pode receber qualquer valor, usado quando não se sabe o tipo de dado que será recebido
//objeto - sem predizibilidade de tipos, pode receber qualquer tipo de dado
let produto = {
    name: "Anderson",
    cidade: "SP",
    idade: 49,
};
let meuProduto = {
    nome: "Notebook",
    preco: 2500,
    unidades: 5,
};
/**
 * arrays
 */
let dados = ["André", "Maria", "José"]; //array de strings 
let dados2 = ["André", "Maria", "José"]; //array de strings, outra forma de declarar
//arrays multi types
let infos = [30, "André", 1.75]; //array de strings e números
/**
 * Tuplas - array com tamanho e tipos fixos
 */
let boleto = ["agua", 199.9, 123456789]; //tupla com 3 elementos, sendo o primeiro uma string, o segundo um número e o terceiro um número
/**
 * arrays métodos
 */
dados.map((item) => `O nome é ${item}`); //map é um método que percorre o array e retorna um novo array com os valores modificados
/**
 * datas
 */
dados.pop(); //pop é um método que remove o último elemento do array
let aniversario = new Date("2026-09-02 05:00"); //Date é um tipo que representa uma data e hora
console.log(aniversario.toString()); //toString é um método que converte a data para string
//# sourceMappingURL=index.js.map