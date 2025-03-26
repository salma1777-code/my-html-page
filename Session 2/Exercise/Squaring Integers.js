/*
Create a pure function that returns a new array containing the
squares of only the positive integers when an array of real numbers is passed to it.
Your function should make use of map and filter instead of any for or while loops or forEach.


*/


function squareList(array) {
return array.filter(x => x > 0 && x % 1 === 0).map(x => x * x)
// jeg starter med at filtrere arrayet, så jeg kun får de positive tal, og derefter bruger jeg map til at gange de positive tal med sig selv (kvadrere dem
}

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2])
console.log(squaredIntegers)
// → [25, 9]