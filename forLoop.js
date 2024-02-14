// forLoop

// forLoop is used travel through an array


// Printing array from left to right
const a = [1,2,3,4,5,46,75,84,99];
for(let i=0;i<a.length;i++){
    console.log(a[i])
}


// Printing array from right to left
const b = [10,20,30,40,50,66,75,84,99]
for(let i=b.length-1;i>=0;i--)
{
    console.log(b[i])
}


// Printing numbers from 1 to 50
for(i=1; i<=50; i++){
    console.log(`Printing Numbers from 1 to 50`,i)
}


// Printing numbers from 50 to 0
for(i=50; i>=0; i--){
    console.log(`Printing Numbers from 50 to 0`,i)
}


// Printing only even numbers from 1 to 100
for(i=1; i<=100; i++){
    if(i % 2 == 0)
    console.log(`even number`,i)
}


// Printing only odd numbers from 1 to 100
for(i=1; i<=100; i++){
    if(i % 2 !== 0)
    console.log(`odd number`,i)
}


// Printing for divisible with 7
for(i=1; i<=70; i++){
    if(i % 7 == 0)
    console.log(i)
}


// Printing for divisible with 15
for(i=0; i<=150; i++){
    if(i % 15 == 0)
    console.log(i)
}


// Printing for not divisible 5
for(i=0; i<=100; i++){
    if(i % 5 !== 0)
    console.log(i)
}

for(i=0; i<9; i++){
    let person = "Sai"
    console.log(`My Name is`,person)
}

for(x=0; x<=50; x++){
    console.log(x)
}

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;  // This is same as: sum = sum + i
}

console.log('The sum of 1 to 10 is: ', sum)


let m = 10;
for(i=0;i<=20;i++){
    m += i
}
console.log(`The Total Sum of 10 to 20 is`,m)