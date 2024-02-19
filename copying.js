// Copying

// Deep copy in objects

console.log(`Deep Copying`)

const a = 20;
let b = a;

console.log(a) // Output : 20
console.log(b) // Output : 20

b = 40;

console.log(a) // Output : 20
console.log(b) // Output : 40

let arr1 = [1, 2, 3];
let arr2 = arr1

console.log(arr1) // Output : [1, 2, 3]
console.log(arr2) // Output : [1, 2, 3]

arr2.push(4)
console.log(arr1) // Output : [1, 2, 3, 4]
console.log(arr2) // Output : [1, 2, 3, 4]

// Spread

console.log(`Deep Copying Using Spread operator!`)

// Deep copying using spread operator

const arrayOne = [1, 2, 3]
const arrayTwo = [...arrayOne]

console.log(arrayOne)
console.log(arrayTwo)

arrayTwo.push(4)

console.log(arrayOne)
console.log(arrayTwo)