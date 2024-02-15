// Arrow Functions

/*
Arrow functions are introduced in ES6 version of javascript 
it provides simple and short index

Syntax of arrow functions

functionName = (parameters) =>
{
    statement
}
functionname(parameters) */

apple =()=>
{
    const a = 3;
    const b = 4;
    console.log(`Addition`,a+b)
}
apple()

ball = (a,b) =>
{
    console.log(`Addition`,a+b)
}
ball(4,4)

car = () =>
{
    const a = "IT"
    const b = "Industry"
    const c = a.concat(b)
    console.log(`concat`,c)
}
car()

discuss = () =>
{
    const a = "sai teja d"
    const b = a.toUpperCase()
    console.log(`upperCase`,b)
}
discuss()

expectation = () =>
{
    const a = `SAI TEJA D`
    const b = a.toLowerCase()
    console.log(`lowerCase`,b)
}
expectation()

flight = () =>
{
    const a = `Extrodinary`;
    const b = a.search(`i`);
    console.log(`search`,b)
}
flight()

great = () =>
{
    const a = "Meditation";
    const b = a.indexOf(`i`);
    console.log(`indexOf`,b)
}
great()

high = () =>
{
    const a = "meditation";
    const b = a.lastIndexOf('i');
    console.log(`lastIndexOf`,b)
}
high()

important = () =>
{
    const a = ['Apple','Bat','Cat','Dog'];
    const b = a.slice(1,2)
    console.log(`slice`,b,a)
}
important()

jeep = () =>
{
    const a = [0,1,2,3,4,5];
    const b = a.shift()
    console.log(`shift`,b,a)
}
jeep()


knowledge = () =>
{
    const a = [1,2,3,4,5];
    const b = a.unshift(0)
    console.log(`unshift`,b,a)
}
knowledge()