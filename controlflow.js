let marks=85;
if(marks>=90){
    console.log("A+ Grade")}
    else if(marks>=80){
        console.log("A Grade")}
    else if(marksd>=70){
        console.log("B grade")}
    else{
        console.log("Fail")
    }
    //using switch
    let day=10;
    switch(day)
    {
        case 1:
            console.log("Monday")
            break;
        case 2:
            console.log("Tuesday")
            break;
        case 3:
            console.log("Wednesday")
            break;
        case 4:
            console.log("Thursday")    
            break;
        case 5:
            console.log("Friday")
            break;
        case 6:
            console.log("Saturday")
            break;
        case 7:
            console.log("Sunday")
            break;
        default:
            console.log("Invalid")
            break;        
    }
    //using for loop
    let n=10;
    for(i=1;i<=n;i++)
    {
        console.log(i)
    }
    // using while loop
let start=1;
console.log("even num:")
while(start<=10)
{
    if(start%2==0)
    {
        console.log(start);
    }
    start++;
}
    
    let colors=["Red","Blue","Green"]
for (let i=0;i<colors.length;i++)
{
    console.log(colors[i])
}
for(let color of colors)
{
    console.log(color)
}
let person=
{
     age:18,
     name:"varsha"
}
for( let key in person)
{
    console.log(` ${key}: ${person[key]}`)
}
for ( let i=5;i>=0;i--)
{
    if(i==3)
    {
        continue;

    }
    else if(i==2)
    {  
        break;

    }
console.log(i)
}