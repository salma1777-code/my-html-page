let pokemon = 

{
    name: "Pikachu",
    Number: 25,
    type: "Electric"
}

console.log(pokemon.name);


// Path: Session%201/Untitled-2.js

let pokemon1 =
    
    {
        name: "ditto",
        Number: 132,
        type: "Normal"
    }
    
    console.log(pokemon1.name);


    const cat   = {
        name: "Fluffy",
        breed: "Siamese",
        color: "White",
        speak: function() {
            console.log("Meow")
        }
    }

    cat.speak();


    const dog = {
        name: "Fido",
        breed: "Golden Retriever",
        color: "Yellow",
        speak: function() {
            console.log("Woof")
        }
    }

    dog.speak();

/*
    const object = {x:10};
    object.x = 20;
    object.y = 30;

    console.log(object)
*/

/*
    let object =
    {
        x: 10
    }

    object.x = 20;
    object.y = 30;

    console.log(object)*/

/*
    const sequence = [1, 1, 2, 3, 5, 8, 13];
    sequence.push(21);
    sequence.push(34);

    console.log(sequence);
    console.log(sequence.pop());
    console.log(sequence);

*/

/*
    let constmyList = [1, 2, 3, 4, 5];
    for (let i = 0; i < myList.length; i++) {
        console.log(myList[i]);
    }

*/


/*
    let numbers = [1, 2, 3, 4, 5];
    for (Element of numbers) {
        console.log(Element);
    }
*/


function max(...numbers) {
    console.log(numbers);
}
console.log(max(1, 2, 4, 5, 6));

// ... is called spread operator
const numbers = [1, 2, 3, 4, 5];
console.log(Math.max(...numbers));


//for array literals

//const words = ["Never", "Fully"];
//console.log(["Will", ...words, "Understand"]);


//for object literals

//let obj = {a: 1, b: 2, c: 3};
//let obj2 = {...obj, d: 4};
//console.log(obj2);


//const [x,y] = [1, 2,3,4,5];
//console.log(x);
//console.log(y);


//const [a, b, ...rest] = [10, 20, 30, 40, 50];
//console.log(a);

/*
const x1 = numbers1[0]
const y1 =numbers1[1]
const numbers1 =[1, 2, 3, 4, 5];

console.log(x1);
console.log(y1);

*/

/*
function myVehicle(vehicle) {
const message= "my"
    
}
*/
/*
function myVehicle({type, wheels, color}) {
    console.log(type, wheels, color);
}

*/


let stuff=[1, 2, 3, 4, 5];
let [a, b, ...rest] = stuff;
console.log(b);