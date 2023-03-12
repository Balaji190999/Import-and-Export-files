const { studentDetails, nirmalDetails } = require("./calculator");
const newStudent = new studentDetails("Balaji", 24);
console.log(newStudent);
console.log(newStudent.name);

const nirmalDetail = new nirmalDetails("Nirmal", 25);
console.log(nirmalDetail);
console.log(nirmalDetail.name);
console.log(nirmalDetail.age);
