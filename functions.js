// sumfunction
function sum(a,b){
  return a+b;
}
// multiplication function
function mul(a,b){
  return a*b;
}
// arrow function 
const arrowSum=(a,b)=>{
  console.log(a+b);
};
 
const arrowMul=(x,y)=>{
  return x*y;
}

const printHello= ()=> {
  console.log("hello");
}

// function 
const printHi= ()=> console.log("Hi Im garima");

function countVowels(str){
  let count=0;
  for(const char of str){
    if(char=="a"|| char=="e"|| char=="i"|| char=="o"|| char=="u" ){
      count++;
    }
  }
  return count;
}

// arrow function 
const countVowel=(str)=>{
  let counts=0;
  for(const char of str){
    if(char=="a"|| char=="e"|| char=="i"|| char=="o"|| char=="u" ){
      counts++;
    }
  }
  return counts;
}

// for each loop (foreach is a higher order function that is used to ue functions as parameter or return function as a value)
let arr=["garima", "dipa", "salina", "himani"];

arr.forEach((val, idx) => {
  console.log(val.toUpperCase(),idx);
});

// square of each array elements using forEach
let num=[1,2,3,4,5,6];
num.forEach((val)=>{
  console.log(val*val);
});

// square of each array elements using Map
let nums=[11,22,33,44,55,66];
nums.map((val)=>{
  console.log(val*val);
});

//using filter array
let newArr=[1,2,3,4,5,6,7,8,9];

let evenArr=newArr.filter((val)=>{
  return val % 2 === 0;
})
console.log(evenArr);

// using reduce method 
let arrs=[1,2,8,9,16,3,4,5];

let output=arrs.reduce((res,val)=>{
  return res>val? res:val;
})
console.log(output);


// practice 1
// we are given array of marks of students. Filter out of the marks of students that scored 90+.

let marks=[20,30,50,40,60,90,100,102,109,60,80];

let score= marks.filter((val)=>{
  return val>90;
})
console.log(score);

// practice 2
/*take a number n as inout from the user. Create an array of numbers from 1 to n. Use the reduce method to calculate sum of all numbers in the array. Ue the reduce method to calculate product of all numbers in the array
*/
let n=prompt("Enter a numer:");

let arras= [];

for(let i=1; i<=n; i++){
  arras[i-1]=i;
}
console.log(arras);

let result= arras.reduce((res,val)=>{
  return res+val;
})
console.log("Sum=",result);

let product= arras.reduce((res,val)=>{
  return res*val;
})
console.log("Product=",product);