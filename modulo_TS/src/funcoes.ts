function addNumber(x: number, y: number): number {
  return x + y;
}

function addToHello(name: string): string {
    return `Hello ${name}`;
   
}

function callToPhone(phone: number | string): number | string {
    return phone;
}

/*
 *Funções Assíncronas
 */

 async function getDataBase(id: number): Promise<string> {
    return "Anderson";
 }

let soma: number = addNumber(4, 5);
console.log(soma); // 9
console.log(addToHello("Anderson")); // Hello Anderson
console.log(callToPhone(123456789)); // 123456789 aceita tanto número quanto string


