// Promises

// Promises are used to handle asynchronous operators
// Promises contains resolve and reject blocks

// Examples

const one = (num) =>
{
    return new Promise ((resole,reject)=>
    {
        if(num % 2 == 0)
        {
            console.log(num)
            resole `It is an Even Number`
        }
        else
        {
            console.log(num)
            reject `It is a Odd Number`
        }
    })
}
one(2).then((result)=>
{
    console.log(result)
}).catch((error)=>
{
    console.log(error)
})


const program = (statement) =>
{
    return new Promise((resolve,reject)=>
    {
        if(statement % 2 == 0)
        {
            console.log(statement)
            resolve `Yes, it's Even Number`
        }
        else
        {
            console.log(statement)
            reject `Yes, it's Odd Number`
        }
    })
}
program(11).then((result)=>
{
    console.log(result)
}).catch((error)=>
{
    console.log(error)
})

const two = (number) =>
{
    return new Promise((resolve,reject)=>
    {
        if(number % 3 == 0)
        {
            console.log(number)
            resolve `Yes, it is didvisble with 3`
        }
        else
        {
            console.log(number)
            reject`No, it is not didvisble with 3`
        }
    })
}
two(21).then((result)=>
{
    console.log(result)
}).catch((error)=>
{
    console.log(error)
})

const first = (main) =>
{
    return new Promise((resolve,reject)=>
    {
        let i = 9
        if(main % i == 0)
        {
            console.log(main)
            resolve`Yes, the given number is divisible with 9`
        }
        else
        {
            console.log(main)
            reject`Yes, the given number is not divisible with 9`
        }
    })
}
first(81).then((result)=>
{
    console.log(result)
}).catch((error)=>
{
    console.log(error)
})

const script = (important)=>{
    return new Promise((resolve,reject)=>
    {
        if(important % 2 == 0)
        {
            console.log(important)
            resolve`Yes, it is an Even Number`
        }
        else
        {
            console.log(important)
            reject`Yes, it is a Odd Number`
        }
    })
}
script(75).then((result)=>
{
    console.log(result)
}).catch((error)=>
{
    console.log(error)
})