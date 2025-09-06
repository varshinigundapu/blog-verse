let man=
{
    name:"varsha",
    age:18,
    address:"siripuram"
}
console.log(man.name)
console.log(man["age"])
const {name,age,address}=man; // destructured assignment
console.log(name)
console.log(age)
console.log(address)
let fruits=["apple","banana","jackfruit","mango"]
console.log(fruits[0])
let num=[1,2,3,4,5,6]
let square=num.map((num)=> num*num); // tansfer each elemnt
console.log(square)
let evens=num.filter((num)=>num%2==0) // filter values on condition
console.log(evens)
let sum=num.reduce((present,nums)=> present+nums,2) // reduce means make single elemnts
console.log(sum)
let persons=[ 
    {
        name:"varshini",
        marks:566
    },
    {
        name:"hema",
        marks:556
    },
    {
        name:"bhagya",
        marks:523
    }
]
let maxmarks=0;
let topper=""
for( person of persons)
{
    if(person.marks>maxmarks)
    {
        maxmarks=person.marks;
        topper=person.name
    }
}
console.log(`topper is ${topper} and she got ${maxmarks}`)