//Generics

function concatArray<T>(...itens: T[]): T[] {
  return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1, 5], [3]);
const strArray = concatArray<string[]>(["Anderson", "Moreno"], ["Mattar"]);

console.log(numArray); // Output: [1, 5, 3]
console.log(strArray); // Output: ["Anderson", "Moreno", "Mattar"]