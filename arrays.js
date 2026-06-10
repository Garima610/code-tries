// let students = ["Ram", "Shyam", "Hari", "Sita", "Gita"];

// console.log(students[0], students[4]);
// students.push("Rita");
// console.log(students);
// students.pop();
// console.log(students);
// console.log(students.length);

// for(let i=0; i< students.length; i++){
//   console.log(students[i]);
// }

// let movies= ["U turn", "Phobia", "Home", "Dead flowers"];
// console.log(movies[0]);
// movies[1]= "Welcome";
// console.log(movies);
// movies.push("Phobia");
// console.log(movies);

// for(let i=0; i<movies.length; i++){
//   console.log(movies[i]);
// }

let num= [10,20,30,40];

num.pop(40);
console.log(num);

const employees= [
  {name: "John", status:"Active", salary: 60000},
  {name: "Jane", status: "On leave", salary: 75000},
  {name: "Mike", status:"Active", salary: 50000},
  {name: "Sarah", status:"Active", salary: 80000}
];

let activeEmp= employees.filter(employee => employee.status === "Active");
console.log(activeEmp);

let names= activeEmp.map(employee => employee.name);
console.log(names);

let totalSalary= activeEmp.reduce((sum, current)=>sum + current.salary,0);
console.log(totalSalary);