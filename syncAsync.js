// Sync
// Async

// In Synchronous statements runs in order untill it executes

// In Asynchronus statements does not wait to execute it will goes
//   to other statement to execute

// synchronous

console.log("synchronous")

console.log("Shiva")
console.log("Ram")
console.log("krishna")
console.log("Sai")

// Asynchronous

console.log("Asynchronous")

setTimeout(()=>
{
    console.log("Ram")
},1500)

setTimeout(()=>
{
    console.log("Krishna")
},2000)

setTimeout(()=>
{
    console.log("Shiva")
},1000)

setTimeout(()=>
{
    console.log("Sai")
},3000)


const a = 10;
const b = 20;
const c = 30;

setTimeout(()=>
{
    console.log(a+b+c)
})

setTimeout(()=>
{
    console.log(c-b-a)
})

setTimeout(()=>
{
    console.log("Sai Teja")
},3500)
setTimeout(()=>
{
    console.log("Sai Teja Dhulipalla")
},4000)
setTimeout(()=>
{
    console.log("Sai Teja Dhulipalla Chowdary")
},4500)