// Examples on Filter

// Even Numbers Printing
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumber = numbers.filter((num,indexnarray)=>
{
    if (num % 2 == 0)
    console.log(num)
})

// Odd Numbers Printing
const num = [1, 2, 3, 4, 5, 6];
const oddNumber = num.filter((numb,index,array)=>
{
    if (numb % 2 !== 0)
    console.log(numb)
})

const words = ["apple", "banana", "kiwi", "orange", "grape"];
const filteredWords = words.filter(word => word.length <= 5);
console.log(filteredWords); // Output: ["apple", "kiwi", "grape"]

const a = ["apple", "banana", "kiwi", "orange", "grape", "red", "go"];
const b = a.filter(word => word.length <= 3);
console.log(b)

const products = [
    { name: "Laptop", price: 1000 },
    { name: "Smartphone", price: 800 },
    { name: "Tablet", price: 500 }
  ];
const affordable = products.filter(product => product.price >= 1000)
console.log(affordable)

const c = [
    { name: "Laptop", price: 1000 },
    { name: "Smartphone", price: 800 },
    { name: "Tablet", price: 500 }
  ];
const d = c.filter(product => product.price < 1000)
console.log(d)

const mixedValues = [0, 1, "", "hello", null, undefined, NaN, false];
const truthyValues = mixedValues.filter(value => value);
console.log(truthyValues); // Output: [1, "hello"]

const e = [0, 1, "", "hello", null, undefined, NaN, false];
const f = e.filter(value => value);
console.log(f); // Output: [1, "hello"]

const array = [10, 20, 30, 40, 50];
const filteredArray = array.filter((element, index) => index > 2);
console.log(filteredArray); // Output: [40, 50]

const g = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const h = g.filter((number,index)=>
{
    return(index > 2)
})
console.log(h);  // Output: [40, 50, 60, 70, 80, 90, 100]


const i = [0, 1, "", "hello", null, undefined, NaN, false];
const j = i.filter((value)=>
{
    return (value)
})
console.log(j)

const k = ["apple", "banana", "kiwi", "orange", "grape"];
const l = k.filter((word,index,array)=>
{
    return (word.length > 5)
})
console.log(l); // Output : ["banana", 'orange"]

const m = ["apple", "bananaa", "kiwi", "orange", "grape"];
const n = m.filter((word,index,array)=>
{
    return (word.length > 6)
})
console.log(n); // Output : ["bananaa"]

const o = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const p = o.filter((numbers,index,array)=>
{
    return(index > 0)
})
console.log(p); // Output : [20, 30, 40, 50, 60, 70, 80, 90, 100]

const arrayNumbers = [1,2,3,2,2,3,4,5,4];
const duplicateNumbers = arrayNumbers.filter((num,index,array)=>
{
    return(arrayNumbers.indexOf(num) === index)
})
console.log(duplicateNumbers); // Output : [ 1, 2, 3, 4, 5 ]

const q = [1,2,3,2,2,3,4,5,4,6,5,7,7,8,5,9,4,5,10];
const r = q.filter((number,index,array)=>
{
    return (q.indexOf(number) === index)
})
console.log(r); // Output : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 20 }
  ];
const filterPerson = people.filter((person,index,array)=>
{
    return (person.age >= 20)
})
console.log(filterPerson)
/* Output : [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 20 }
]*/

const s = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 20 }
  ];
const t = s.filter((num,index,a)=>
{
    return ( num.age > 25)
})
console.log(t); // Output : [ { name: 'Bob', age: 30 } ]

const arra = [1, null, 2, undefined, 3, 4, null, 5];
const filteredArra = arra.filter(value => value !== null && value !== undefined);
console.log(filteredArra); // Output: [1, 2, 3, 4, 5]

const u = [1, null, 2, undefined, 3, 4, null, 5];
const v = u.filter((a,b,c)=>
{
    return(a !== null && a !== undefined)
})
console.log(v) // Output: [1, 2, 3, 4, 5]