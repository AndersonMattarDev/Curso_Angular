"use strict";
// Classe
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Data Modifiers
 * Public: Acessível de qualquer lugar
 * Private: Acessível apenas dentro da classe
 * Protected: Acessível dentro da classe e suas subclasses
 * podem ser usados em métodos e propriedades
 */
class Character {
    constructor(name, strength, skill) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.strength} points of damage`);
    }
}
//Character: Superclass 
//Magician: Subclass of Character
class Magician extends Character {
    constructor(name, strength, skill, magicPoints) {
        super(name, strength, skill);
        this.magicPoints = magicPoints;
    }
}
const p1 = new Character("Orc", 10, 5);
const p2 = new Magician("Elf", 9, 30, 100);
console.log(p1); // Output: Orc
p1.attack(); // Output: Attack with 10 points of damage
console.log(p2); // Output: Elf
p2.attack(); // Output: Attack with 9 points of damage
//# sourceMappingURL=classes.js.map