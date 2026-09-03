//interfaces (type x interface)

type robot = {
  id: number; //aceita múltiplos tipos de dados, como number | string e readonly, como readonly id: number
  name: string;
};

//Diferença entre type e interface: a interface pode ser estendida, enquanto o type não pode.

interface robot2 {
  id: number | string; // aceita múltiplos tipos de dados, como number | string e readonly, como readonly id: number
  name: string;
  sayHello(): string; //método que não retorna nada
}

const bot1: robot = {
  id: 1,
  name: "Megaman",
};
const bot2: robot2 = {
  id: "2",
  name: "R2D2",
  sayHello(): string {
    return `Hello, my name is ${this.name}!`;
  },
};

console.log(bot1);
console.log(bot2);
/*uso type quando quero criar um tipo de dado,
 e interface quando quero criar uma estrutura
 de dados que pode ser estendida.
por exemplo, se eu quiser criar uma interface que estenda a interface robot2, eu posso fazer assim:
interface robot3 extends robot2 {
  weapon: string;
}
  e usar type quando eu quiser criar um tipo de dado que seja uma união de tipos, por exemplo:
type robot4 = robot | robot2;
 
Outra forma de usar type é quando eu quero criar um tipo de dado que seja uma função, por exemplo:
type robot5 = (id: number, name: string) => robot;

E outra de usar interface é quando eu quero criar uma interface que seja uma função, por exemplo:
interface robot6 {
  (id: number, name: string): robot;
}

resumindo uso type para tipar variáveis e funções, e interface para criar estruturas de 
dados que podem ser estendidas, ou seja contratos que podem ser implementados por classes ou objetos.
*/

class Pessoa implements robot2 {
    id: number | string;
    name: string
    constructor(id: number | string, name: string) {
        this.id = id;
        this.name = name;
    }
      sayHello(): string {
        return `Hello, my name is ${this.name}!`;
      }
}

const p = new Pessoa(1, "João");
console.log(p.sayHello());