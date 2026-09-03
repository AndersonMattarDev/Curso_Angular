"use strict";
//interfaces (type x interface)
Object.defineProperty(exports, "__esModule", { value: true });
const bot1 = {
    id: 1,
    name: "Megaman",
};
const bot2 = {
    id: "2",
    name: "R2D2",
    sayHello() {
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
class Pessoa {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Hello, my name is ${this.name}!`;
    }
}
const p = new Pessoa(1, "João");
console.log(p.sayHello());
//# sourceMappingURL=interfaces.js.map