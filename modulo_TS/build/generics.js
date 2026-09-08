"use strict";
//Generics
Object.defineProperty(exports, "__esModule", { value: true });
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 5], [3]);
const strArray = concatArray(["Anderson", "Moreno"], ["Mattar"]);
console.log(numArray); // Output: [1, 5, 3]
console.log(strArray); // Output: ["Anderson", "Moreno", "Mattar"]
//# sourceMappingURL=generics.js.map