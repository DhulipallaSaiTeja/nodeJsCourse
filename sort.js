// Sort

const a = [`i`,`am`,`in`,`Bengaluru`]
console.log(a.sort())

const b = [250,641,5,284,28,1,85,0,5,66,519,219]
console.log(b.sort())

const c = [1,50,90,70,80,20,45]
console.log(c.sort(function(a,b)
{
    return(a-b)
}))

// Assending Order

const d = [20,45,87,36,15,36,49,2,27,264,24,6,2,1]
console.log(d.sort(function(a,b){
    return(a-b)
}))


// Desending orer

const e = [10,20,30,50,60,79,555,80,66851,2,1562481,1]
console.log(e.sort(function(a,b)
{
    return(b-a)
}))