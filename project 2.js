// Define a person object
let person = {
  name: "John Doe",
  age: 30,
  occupation: "Software Engineer"
};

// Function to print person properties
function printPersonDetails(person) {
  for (let property in person) {
    if (person.hasOwnProperty(property)) {
      console.log(`${property}: ${person[property]}`);
    }
  }
}

// Call the function with the person object
printPersonDetails(person);
