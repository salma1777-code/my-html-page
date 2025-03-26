/*The sort method sorts the elements of an array according to an optional callback function: */
/*Note that the array is sorted in place, and no copy is made. It is an impure function.

JavaScript's default sorting method is by string Unicode point value, which may return unexpected results. Therefore, it is encouraged to provide a function to specify how to sort the array items. When such a function is supplied, the array elements are sorted according to the return value of the function: If it returns a value less than 0 for two elements a and b, then a will come before b. If it returns a value greater than 0 for two elements a and b, then b will come before a. If it returns a value equal to 0 for two elements a and b, then a and b will remain unchanged.

Use the sort method to write a pure function that produces a new alphabetically sorted array.*/


function alphabeticalOrder(array) {
    return [...array].sort((a, b) => (a === b ? 0 : a < b ? -1 : 1))


    //return array.slice().sort()
    //slice laver en kopi af arrayet, så jeg ikke ændrer på det originale array, og derefter bruger jeg sort til at sortere arrayet
    //jeg bruger slice til at lave en kopi af arrayet, så jeg ikke ændrer på det originale array, og derefter bruger jeg sort til at sortere arrayet
}
const letters = ["a", "d", "c", "a", "z", "g"]

console.log(alphabeticalOrder(letters))
// → ["a", "a", "c", "d", "g", "z"]
console.log(letters)
// → [ "a", "d", "c", "a", "z", "g"]
