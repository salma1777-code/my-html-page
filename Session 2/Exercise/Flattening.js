/*
Use the reduce method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.
*/

let arrays = [[1, 2, 3], [4, 5], [6]]

function flatten(array)
{
    return array.reduce((flat, current) => flat.concat(current), [])
}

console.log(flatten(arrays))
// → [1, 2, 3, 4, 5, 6]