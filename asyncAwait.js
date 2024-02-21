// asyncAwait

// Examples

const a = 100;
const b = 200;
const c = 300;
console.log(a)
console.log(b)
console.log(c)
async function stop()
{
    await console.log(a+b+c)
}
console.log(a-b)
console.log(b-c)
console.log(c-a)
console.log(a-b-c)
stop()

execute =async()=>
{
    await console.log(a+b-c)
}
execute()

const x = 1000;
const y = 2000;
const z = 3000;

console.log(x)
console.log(y)
console.log(z)

async function code()
{
    await console.log(x+y+z)
}
console.log(x-y)
console.log(y-z)
console.log(z-x)
code()

codeing = async () =>
{
    await console.log(x+y-z)
}
codeing()