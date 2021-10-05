class Pokemon {
    name = '';
    type = '';
    evolutions = [];
    

    constructor (name, type, evolutions){
        this.name = name;
        this.type = type;
        this.evolutions = evolutions;
    }

    attack(){
        return `${this.name}, esta atacando`;
    }
    evolve(evolution = 0){
        const EVOLVE = this.evolutions[evolution] || '';
        let message = `No puede evolucionar`;

        if (EVOLVE) {
            message = `${this.name} esta evolucionando a ${EVOLVE}`;
            this.name = EVOLVE;            
        }
        return message;
    }
};

const charmander = new Pokemon('Charmander','Fire',['Charmeleon','Charizar']);
const squirtle = new Pokemon('Squirtle','Water',['Wartortle','Blastoide']);

console.log(`${squirtle.name},${squirtle.type}`);
console.log(squirtle.attack());
console.log(squirtle.evolve(0));
console.log(`${squirtle.name},${squirtle.type}`);
console.log(squirtle.evolve(1));
console.log(`${squirtle.name},${squirtle.type}`);