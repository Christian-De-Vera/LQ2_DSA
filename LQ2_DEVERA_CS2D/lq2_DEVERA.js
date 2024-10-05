// Instantiate Five (5) Variables -> Name, Address, Age, Class Roles (Officer, Student, Teacher), and Course (BSCS, BSM, BAEL)

let name = prompt("Name: ");
let address = prompt("Adress: ");
let age = prompt("Age: ");
let classRoles = prompt("Class Role (OFFICER, STUDENT, TEACHER): ");
let course = prompt("Course (BSCS, BSM, BAEL): ");

let iterations = Math.floor(age / 4); //so that we can get a whole number without a decimal or smthing

switch (course.toUpperCase()) { // It's important to upper case whatever the user input so it can be compared easily
    case "BSCS":
        for (let i = 0; i < iterations; i++) {
            console.log(name); // I would not print the other variables, cuz it wasn't in the instructions to do so
        }
        break;

    case "BSM":
        for (let i = 0; i < iterations; i++) {
            console.log(name);
        }
        break;
    
    case "BAEL":
        for (let i = 0; i < iterations; i++) {
            console.log(name);
        }
        break;

    default:
        alert("Course isn't in the list, or spelling error");
}