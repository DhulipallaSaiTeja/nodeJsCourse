// Filter

// filter method is used to filter duplicate items

const a = [1,1,2,2,3,3,4,4,5,5];
const b = a.filter((Number,index)=>
{
    return (a.indexOf(Number) === index)
})
console.log(b)

var arr = [1,1,2,2,3,3,4,5]
var arra = arr.filter((number,index)=>
{
   return  arr.indexOf(number)===index
})
console.log(arra)

const c = [1,2,3,3,4,5,5,6,6,7,,1,1,2,3,7]
const d = c.filter((number,index,array)=>
{
    return c.indexOf(number) == index
})
console.log(d)

const e = [1,2,3,3,4,5,5,6,6,7,1,1,2,3,7,8,8,9,10,8,9,2,10,4]
const f = e.filter((number,index,array)=>
{
    return e.indexOf(number) == index
})
console.log(f)

const g = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
const h = g.filter((number,index,array)=>
{
    if(number % 2 == 0)
    console.log(`Even`,number)
})

const i = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
const j = i.filter((number,index,array)=>
{
    if(number % 2 !== 0)
    console.log(`Odd`,number)
})


var k = [100,200,300,400,500]
var l = k.filter((number,index,array)=>
{
    return (number * 11)
})
console.log(l)