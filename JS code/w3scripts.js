//Creating an object person, delete a property eyecolorq an disply with forin:
const person = {
    firstName: "Joe",
    lastName: "Doe",
    age: 43,
    eyecolor: "blue",
    cars: {
        car1: "BMW", 
        car2: "Mercedes",
        car3: "Fiat"
    }
};

delete person.eyecolor;

let text = "";

for (let part in person) {
   
    if (person[part] === person.cars) {
        for (let c in person.cars) {
            text += " car: " + person.cars[c] + " ";
        }
    }
    else {
        text += person[part] + " ";
    }
}

const valuesArray = Object.values(person);

console.log(text);
console.log(valuesArray);