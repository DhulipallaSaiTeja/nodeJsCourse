// Reduce

// arrayReduce

/*
const a = [1,2,3,4,5,6,7,8,9,10];
const b = a.reduce((preNumber,currNumber,index,array)=>
{
    console.log(preNumber,currNumber)
    return(preNumber*currNumber)
})
*/

const a = [1,2,3,4,5,6,7,8,9,10];
const b = a.reduce((preValue,currValue,index,array)=>
{
    console.log(preValue,currValue)
    return(preValue*currValue)
})


const c = [1,2,3,4,5,6,7,8,9,10];
const d = c.reduce((preValue,currValue,index,array)=>
{
    console.log(preValue,currValue)
    return(preValue+currValue)
})

const e = [0,1,2,3,4,5]
const f = e.reduce((preNumber,currNumber,index,array)=>
{
    console.log(preNumber,currNumber)
    return(preNumber-currNumber)
})

const g = [10,20,30,40,23,69,5,18,19,21,23,44,50]
const h = g.reduce((preNumber,currNumber,index,array)=>
{
    if(currNumber % 2 == 0)
    {
    console.log(currNumber)
    }
})


const i = [11,30,33,21,27,40,23,69,5,18,19,21,23,44,50];
const j = i.reduce((preNumber,currNumber,index,array)=>
{
    if(currNumber % 2 == 0)
    {
        console.log(`Even`,currNumber)
    }
})

const k = [11,30,33,21,27,40,23,69,5,18,19,21,23,44,50];
const l = k.reduce((preNumber,currNumber,index,array)=>
{
    if(currNumber % 2 !== 0)
    {
        console.log(`Odd`,currNumber)
    }
})


const m = [1,2,3,4,5,6,7,8,9,10];
const n = m.map((number,index,array)=>
{
    if(number % 2 == 0)
    console.log(`Even using map`,number)
})

const o = [1,2,3,4,5,6,7,8,9,10];
const p = o.reduce((preNumber,currNumber,index,array)=>
{
    if(currNumber % 2 !== 0)
    {
        console.log(`Odd using reduce`,currNumber)
    }
})