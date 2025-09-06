let x=10,y=2;
console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y)
console.log(x**y)
// assignment operators
let z=5
z+=3
console.log(z)
z=4
z-=3
console.log(z)
z=4
z*=2
console.log(z)
z=20
z/=10
console.log(z)
//comparison operators
let a=10,b="10";
console.log(a==b)
console.log(a!=b)
console.log(a===b)
console.log(a!==b)
console.log(a>b)
console.log(a<b)
console.log(a>=b)
console.log(a<=b)
//logical operators
let age=20;
console.log(age>=20 && age<=40)
console.log(age<20 || age>20)
console.log(!(age<18))
//string operators
let firstname="Gundapu"
let lastname="varshini"
let fullname=firstname+ " "+lastname
console.log(fullname)
let correctname=`hello ${firstname} ${lastname},welcome`
console.log(correctname)
//ternary operators
let myage=18;
if(myage>=18)
{
    console.log("eligible to vote")
    //result="eligible to vote"
}
else{
    console.log("not eligible")
}
let result=myage>=18 ? "eligible to vote" : "not eligible"
console.log(result)
//increment and decrement operators
let count=5;
console.log(count++)
console.log(count)
console.log(++count)
//type operators
console.log(typeof count)
console.log(typeof "varshu")
console.log(typeof 18)