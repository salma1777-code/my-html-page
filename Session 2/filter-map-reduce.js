const pokemon = [
    { name: "Pikachu", type: "electric", hp: 35 },
    { name: "Charmander", type: "fire", hp: 39 },
    { name: "Squirtle", type: "water", hp: 44 },
    { name: "Jigglypuff", type: "normal", hp: 115 }
]
const firePokemon = pokemon.filter(({ type }) => type === "fire")
console.log(firePokemon)
// → [{ name: 'Charmander', type: 'fire', hp: 39 }]


const electricPokemon = pokemon.filter(({ type }) => type === "electric")
console.log(electricPokemon)


//MAP
//map er en metode som tager et array og laver et nyt array ud fra det.
const pokemonNames = pokemon.map(pokemon => pokemon.name)

console.log(pokemonNames)
// → ['Pikachu', 'Charmander', 'Squirtle', 'Jigglypuff']



//REDUCE
//reduce er en metode som tager et array og laver det om til et enkelt objekt
const sumHp = (accumulator, pokemon) => accumulator + pokemon.hp

const totalHp = pokemon.reduce(sumHp, 0)
console.log(totalHp)
// → 233



