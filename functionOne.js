function increment(a,b)
{
    return (a+b)
}
console.log(increment(2,3))
console.log(increment(22,3))
console.log(increment(2,33))
console.log(increment(12,3))
console.log(increment(2,43))

function decrement(a,b)
{
    return (a-b)
}
console.log(decrement(20,10))
console.log(decrement(202,101))
console.log(decrement(220,110))
console.log(decrement(201,101))
console.log(decrement(230,130))

function increase(a,b)
{
    return a/b
}
console.log(increase(20,10))
console.log(increase(200,10))
console.log(increase(200,100))
console.log(increase(220,10))
console.log(increase(420,10))


arrow = (num) =>
{
    if(num % 2 == 0){
        return(`Even`)
    }
    else{
        return(`Odd`)
    }
}
console.log(`The Given NUmber is`,arrow(20))

apple = (am) =>
{
    if(am % 2 == 0){
        return(`EVEN`)
    }
    else{
        return(`ODD`)
    }
}
console.log(`The Given NUmber is`,apple(23))

ball = (pm) =>
{
    if(pm % 2 == 0)
    {
        return(`EVEN`)
    }
    else
    {
        return(`ODD`)
    }
}
console.log(`The Given Number is`,ball(841))