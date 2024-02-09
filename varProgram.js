// var, let, const programms

// scope of const and let will be defined only in the perticular block

if (true) {
    let personName = "Sai"
    console.log(personName)
}

if (true) {
    let person = "Sai"
}
// console.log(person)
// if we execute above program it will show error as
// ReferenceError: person is not defined


if (true) {
    const personOne = "Sai Teja"
    console.log(personOne)
}

if (true) {
    const personOnee = "Sai Teja"
}
//console.log(personOnee)
// Again if we execute above programm it will show error as
// ReferenceError: personOnee is not defined

// when we execute let and const out of the block the code 
// will not execute

if (true){
    var personTwo = `Sai Teja D`
}
console.log(personTwo)

if (true){
    var personThree = `Sai D`
    console.log(personThree)
}

if (true){
    var personfour= `Sai Dhulipalla`
    console.log(personfour)
}

// In var when we execute code it will be executed,
// though inside and outside the block
// in let and const only executed in inside block

if (true){
    var personfive= `Sai Teja Dhulipalla`
}
console.log(`var`,personfive)

if (true){
    var personfive= `SaiDhulipalla`
}
console.log(`var`,personfive)

// By using var we can assign same value to give variable

if (true){
    var personfive= `Praveen`
}

if (true){
    var personfive= `Praveen Kola`
}
console.log(`var`,personfive)

// in the above condition we used same variable but with different values


/* in var when we use same variable but with different values it 
    don`t show any error but last declared variable value was executed*/




