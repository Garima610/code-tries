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

//  let num= [10,20,30,40];

// num.pop(40);
// console.log(num);

// const employees= [
//   {name: "John", status:"Active", salary: 60000},
//   {name: "Jane", status: "On leave", salary: 75000},
//   {name: "Mike", status:"Active", salary: 50000},
//   {name: "Sarah", status:"Active", salary: 80000}
// ];

//get info of active emp
// let activeEmp= employees.filter(employee => employee.status === "Active");
// console.log(activeEmp);

// let empName= activeEmp.map(employee => employee.name);
// console.log(empName);

// let totalSalary= activeEmp.reduce((sum, current)=>sum + current.salary,0);
// console.log(totalSalary);

// let highSalary = employees.find(employee=> employee.salary>70000)
// console.log(highSalary)

// let checkEmp= name.includes("Sarah");
// console.log(checkEmp)
/* split,reverse,join 
let sentence= "JavaScript is awesome";

let wordsArray= sentence.split(" ");
// let wordsArray= sentence.split("");
// let wordsArray= sentence.split("s");
// console.log(wordsArray);

let reversedArray= wordsArray.reverse();
console.log(reversedArray);

let finalSentence= reversedArray.join(" ");
console.log(finalSentence)


let line= "learning javaScript is fun";

let reversedLine= line.split(" ").reverse().join(" ");
console.log(reversedLine)

// sorting 

let fruits= ["mango", "banana", "apple", "cherry"];
fruits.sort();
console.log(fruits);

// sorting numbers in ascending 

let numbers = [10, 5, 100, 25, 3];

numbers.sort((a,b)=> a-b);
console.log(numbers)

// in descending 

numbers.sort((a,b)=> b-a);
console.log(numbers)


let prices= [450, 120, 899, 50, 300, 75];

prices.sort((a,b)=>a-b);
console.log(prices)

prices.sort((a,b)=> b-a);
console.log(prices)

// multiDimensional array 

let inventory =[
["apples", "bananas", "oranges"],
["milk", "eggs", "bread"],
];

console.log(inventory[0])
console.log(inventory[1]);

console.log(inventory[1] [1])

let flatInventory= inventory.flat();
console.log(flatInventory) */

const playlist= [
  {title: "Blending Lights", artist: "The weeknd", duration: 3.2, genre: "Pop"},
  {title: "Levitating", artist: "Dua Lipa", duration: 3.2, genre: "Pop"},
  {title: "Shape of you", artist: "Ed Sheeran", duration: 3.9, genre: "Pop"},
  {title: "Hitel California", artist: "Eagles", duration: 6.3, genre:"Rock"}
];

let PopSongs= playlist.filter(playlist =>playlist.genre === "Pop" )
console.log(PopSongs)

let PopList= PopSongs.map(playlist =>playlist.title);
console.log(PopList);

let allTitles= playlist.map(playlist=> playlist.title);
console.log(allTitles);

let longSong= playlist.find(playlist=>playlist.duration>5)
console.log(longSong);

let allArtist= playlist.map((playlist)=>playlist.artist)
console.log(allArtist);
// let checkSong= allArtist.includes("Taylor Swift");
let checkSong= allArtist.includes("Dua Lipa");
console.log(checkSong);

let totalDuration = playlist.reduce((sum, current)=>sum + current.duration,0)
console.log(totalDuration)