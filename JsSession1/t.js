//T1
var a=prompt("enter your age:")
22
console.log("your age in days is:"+ a *365);

//T2
 var person={
     name:"John",
     age:30,
 }
 console.log("hello"+" "+person.name+" your age is: "+person.age+" years old");


 //T3
 var sum= (a,b)=> {
     return a+b
 }
 var sub= (a,b)=> {
     return a-b
 }
 var multiply= (a,b)=> {
     return a*b
 }
 var divide= (a,b)=> {
     return a/b
 }
 var A=Number(prompt("enter first number:"))
 var B=Number(prompt("enter second number:"))
 console.log("the sum of "+A+" and "+B+" is "+sum(A,B));
  console.log("the subtraction of "+A+" and "+B+" is "+sub(A,B));
 console.log("the multiplication of "+A+" and "+B+" is "+multiply(A,B));
 console.log("the division of "+A+" and "+B+" is "+divide(A,B));
 
 