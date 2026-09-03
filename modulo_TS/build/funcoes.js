"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addNumber(x, y) {
    return x + y;
}
function addToHello(name) {
    return `Hello ${name}`;
}
function callToPhone(phone) {
    return phone;
}
/*
 *Funções Assíncronas
 */
async function getDataBase(id) {
    return "Anderson";
}
let soma = addNumber(4, 5);
console.log(soma); // 9
console.log(addToHello("Anderson")); // Hello Anderson
console.log(callToPhone(123456789)); // 123456789 aceita tanto número quanto string
//# sourceMappingURL=funcoes.js.map