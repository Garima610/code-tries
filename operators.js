// //this is single line comment.
// /*this is multi-line comment*/ 
// // Arithmetic operators
// let a=5;
// let b=2;
// console.log("a=",a,"b=",b);
// console.log("a+b=",a+b);
// console.log("a-b=",a-b);
// console.log("a*b=",a*b);
// console.log("a**b=",a**b);
// // unary operators
// let c=5;
// let d=8;
// c=c+1;
// d=d-1;
// console.log("c =",c);
// console.log("d=",d);
// console.log("c--=",c--);
// console.log("c=",c);
// console.log("d++=",d);
// console.log("a*b=",a*b);


let num= prompt("Enter a number");
if(num%5==0){
  console.log("Number is a mutiple of 5");
}
else{
  console.log("Number is not a multiple of 5");
}



let score= prompt("Enter students score");
if(score>=80 && score<=100)
{
  console.log("grade= A");
}
else if(score>=70 && score<80)
{
  console.log("grade= B");
}
else if(score>=60 && score<70)
{
  console.log("grade= C");
}
else if(score>=50 && score<60)
{
  console.log("grade= D")
}
else if(score>=0 && score<50){
  console.log("grade= F");
}