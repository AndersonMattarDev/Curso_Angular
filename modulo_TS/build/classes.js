"use strict";
// Classe
Object.defineProperty(exports, "__esModule", { value: true });
class Character {
    name;
    strength;
    skill;
    constructor(name, strength, skill) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.strength} points of damage`);
    }
}
const p1 = new Character("Player 1", 10, 5);
console.log(p1); // Output: Player 1
p1.attack(); // Output: Attack with 10 points of damage
//# sourceMappingURL=classes.js.map