const ingredients = ["🍞", "🥬", "🥒", "🍅", "🧀"]

const sandwich = ingredients
    .filter(ingredient => ingredient !== "🥒")
    .map(ingredient => "🔪" + ingredient)
    .reduce((sandwich, ingredient) => sandwich + ingredient)

console.log(sandwich)

// → 🍞🔪🥬🔪🍅🔪🧀