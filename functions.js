// functions

/* function functionName(parameters)
{
    statement
}
functionName(parameters)*/

function addition(a,b)
{
    console.log(`addition`,a+b)
}
addition(1,2)


function sub()
{
    const a = 10;
    const b = 20;
    console.log(`subraction`,a-b)
}
sub()

function multi()
{
    const a = 1;
    const b = 10;
    const c = 100;
    console.log(`multiplication`,a*b*c)
}
multi()

function divi()
{
    const a = 100;
    const b = 10;
    console.log(`division`,a/b)
}
divi()

function apple()
{
    const a = [1,2,3,4,5];
    const b = a.reverse()
    console.log(`reverseMethod`,b)
}
apple()

function ball()
{
    const a = [0,1,2,3,4,5];
    const b = a.splice(0,1,1);
    console.log(`spliceMethod`,b,a)
}
ball()

function car()
{
    const a = [1,2,3,4,5];
    const b = a.pop();
    console.log(`popMethod`,b,a)
}
car()

function dollar()
{
    const a = [1,2,3,4]
    const b = a.push(5)
    console.log(`pushMethod`,b,a)
}
dollar()

function excuse()
{
    const a = `Sai Teja Dhulipalla`;
    const b = a.length
    console.log(`lengthMethod`,b)
}
excuse()

function fight()
{
    const a = `  Sai Teja Dhulipalla    `
    const b = a.trim()
    console.log(`sortMethod`,b)
}
fight()

function high()
{
    const a = "Sai"
    const b = "Teja"
    const c = "Chowdary"
    const d = "Dhulipalla"
    console.log(`conactMethod`,a.concat(b,c,d))
}
high()

function increase()
{
    const a = "5 Star"
    const b = "Dairy Milk"
    const c = a.replace(a,b)
    console.log(`replaceMethod`,c)
}
increase()