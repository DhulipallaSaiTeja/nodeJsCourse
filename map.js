// Map

// newArray = array.map(number,index,array)

var array = [10,20,30,40,50,60,70,80,90,100]
var newArray = array.map((number,index,array) =>
{
    for(i=0; i<array.length; i++)
    {
    return number = number*2
    }
})
console.log(newArray)


var a = [1,2,3,4,5,6,7,8,9,10];
var output = a.map((num,index,a)=>
{
    for(i =0;i<a.length;i++)
    {
       return  num = num * 2 
    }
})
console.log(output)

var a = [1,2,3,4,5,6,7,8,9,10];
var b = a.map((number,index,array)=>
{
    if(number % 2 == 0)
    console.log(number)
})

const c = [1,2,3,4,5,6,7,8,9,10];
const d = c.map((num,index,array)=>
{
    if(num % 2 !== 0)
    console.log(num)
})

const e = [1,2,3,4,5,6,7,8,9,10];
const f = e.map((num,index,array)=>
{
    return num*num
})
console.log(`square`,f)

const g = [1,2,3,4,5];
const h = g.map((num,index,array)=>
{
    return(num*num*num)
})
console.log(`cube`,h)

var i = [1,2,3,4,5,6,7,8,9,10];
const j = i.map((num,index,array)=>
{
    return (num+10)
})
console.log(`Add`,j)

const k = [1,2,3,4,5,6,7,8,9,10];
const l = k.map((num,index,arr)=>
{
    return (num-10)
})
console.log(`sub`,l)

const m = [1,2,3,4,5,6,7,8,9,10];
const n = m.map((num,index,a)=>
{
    if(num % 2 == 0)
    console.log(num)
})