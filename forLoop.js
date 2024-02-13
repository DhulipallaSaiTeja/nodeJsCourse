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