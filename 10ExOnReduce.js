// Reduce

// 1.
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15

const a = [1,2,3,4,5];
const b = a.reduce((Number,index,array)=>
{
    return(Number + index)
})
console.log(b)  // Output: 15

// 2.
const c = [[1, 2], [3, 4], [5, 6]];
const d = c.reduce((number,index,array)=>
{
    return(number.concat(index))
})
console.log(d); // Output : [ 1, 2, 3, 4, 5, 6 ]

// 3.
const number = [10, 5, 20, 15];
const max = number.reduce((number,index,array)=>
{
    return (Math.max(number,index))
})
console.log(max)

const e = [1,20,35,84,21,95];
const f = e.reduce((number,index,array)=>
{
    return (Math.max(number,index))
})
console.log(f)

// 4.
const g = [10, 5, 20, 15];
const h = g.reduce((number,index,array)=>
{
    return (Math.min(number,index))
})
console.log(h)

const i = [1,20,35,84,21,95];
const j = i.reduce((number,index,array)=>
{
    return (Math.min(number,index))
})
console.log(j)

// 5.
const sring = [`Hello`, ` `, `World`, `!`];
const concatString = sring.reduce((word,index,aray)=>
{
    return (word + index)
})
console.log(concatString)

const k = [`Hello`, ` `, `World`, `.....`];
const l = k.reduce((word,index,array)=>
{
    return (word + index)
})
console.log(l)

// 6.
const m = [1, 2, 3, 4, 5];
const n = m.reduce((number,index,array)=>
{
    return ([index].concat(number))
})
console.log(n) // Output : [ 5, 4, 3, 2, 1 ]

const o = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const p = o.reduce((number,index,array)=>
{
    return([index].concat(number))
})
console.log(p) // Output : [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// 7.
const q = [1, 2, 3, 4, 5];
const r = q.reduce((number,index,aray)=>
{
    return(number && index > 0)
})
console.log(r)

const s = [1, 2, 3, 4, 5];
const t = s.reduce((number,index,array)=>
{
    return(number && index > 6)
})
console.log(t)


