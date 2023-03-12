import { studentDetails, addressDetails } from "./calculator.mjs";

let student1 = new studentDetails("Balaji", 25);
console.log(student1);
console.log(student1.name);

let student1Address = new addressDetails("Chennai", "Tamilnadu");
console.log(student1Address);
console.log(student1Address.state);
