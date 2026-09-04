// Classe

/**
 * Data Modifiers 
 * Public: Acessível de qualquer lugar
 * Private: Acessível apenas dentro da classe
 * Protected: Acessível dentro da classe e suas subclasses
 * podem ser usados em métodos e propriedades
 */

class Character{
    private name: string;
    protected strength: number;
    public skill: number;

    constructor(name: string, strength: number, skill: number){
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }


    public attack() : void{
        console.log(`Attack with ${this.strength} points of damage`);
    }
}

const p1 = new Character("Player 1", 10, 5);
console.log(p1); // Output: Player 1
p1.attack(); // Output: Attack with 10 points of damage
