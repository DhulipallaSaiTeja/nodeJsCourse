//dataTypes

// dataTypes are of two types
// They are 
// 1. Primitive
// 2. Non Primitive

/* Primitive
1. Integer (Integer is known as number)
2. Number (var a = 10)
3. Undefined (var a )
4. Null (not declared)
5. String ("names",'names',`names`)
6. Boolean (true or false)*/

//Number
const a = 10;
const b = 20;
console.log(`Number`,`c =`,a+b)

// Undefined

const c = 10;
//const d;
//console.log(c+d)

// Boolean

const e = 100;
const f = 200;
console.log(e>f)

const g = 10;
const h = Boolean(g>11)

const i = 100;
const j = 10;
const k = Boolean(i>=j)

const l = 120;
const m = 110;
const n = Boolean(l<=m)

const o = 100;
const p = "100";
const q = Boolean(o==p)
const r = Boolean(o===p)

console.log(h)
console.log(k)
console.log(n)
console.log(q)
console.log(r)

// Non Primitives

// Object

const presentAddress = 
{Name : "Sai", City : "Bengaluru", State : "Karnataka"}
console.log("object",presentAddress)

// Array

const arra = [10,20,30,40,50]
console.log('Array',arra)

// Array of object

const personOne = [{Name: "Sai Teja", Age: 22, DOBY: 2001},
                   {Name: "Praveen", Age: 24, DOBY:1999}]
console.log("Array of object",personOne)





