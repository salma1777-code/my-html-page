/*The some method works with arrays to check if any element passes a particular test.
 It returns a Boolean value - true if any of the values meet the criteria, false if not.

Use the some method inside the checkPositive function to check if any element in the array is positive.
The function should return a Boolean value. */

function checkPositive(array) {
    return array.some(element => element > 0)

    //jeg bruger some til at tjekke om der er nogle elementer i arrayet, som er større end 0
    //some metoden returnerer true hvis et element i arrayet opfylder betingelsen, og false hvis ingen af elementerne opfylder betingelsen
}

console.log(checkPositive([1, 2, 3, -4, 5]))
// → true