// class method is used to creat multiple objects

class motorCycle{
    constructor (Bike,CC,Makers,Colour)
    {
        this.Bike = Bike
        this.CC = CC
        this.Makers = Makers
        this.Colour = Colour
    }
    sampleMethod()
    {
        return `${this.Bike}, ${this.CC},${this.Makers},${this.Colour}`
    }
}
var BikeOne = new motorCycle(`Pulsar`,250,`Bajaj`,`Red`)
var BikeTwo = new motorCycle(`Activa`,110,`Honda`,`Black`)
console.log(BikeOne)
console.log(BikeTwo)
console.log(BikeOne.sampleMethod())
console.log(BikeTwo.sampleMethod())

class vehical{
    constructor(Model,Company,Colour,Transmission)
    {
        this.Model = Model
        this.Company = Company
        this.Colour = Colour
        this.Transmission = Transmission
    }
    method()
    {
        return `${this.Model},${this.Company},${this.Colour},${this.Transmission}`
    }
}
var carOne = new vehical(`Freestyle`,`Ford`,`Red`,`Manual`);
var carTwo = new vehical(`EcoSport`,`Ford`,`Black`,`Manual`)
console.log(carOne)
console.log(carTwo)
console.log(carOne.method())
console.log(carTwo.method())

class product{
    constructor(Item,Type,Makers,Colour)
    {
        this.Item = Item
        this.Type = Type
        this.Makers = Makers
        this.Colour = Colour
    }
    method()
    {
        return`${this.Item},${this.Type},${this.Makers},${this.Colour}`
    }
}
let productOne = new product(`Chair`,`Plastic`,`Cello`,`Black`)
let productTwo = new product(`Table`,`Plastic`,`Nilkamal`,`White`)
console.log(productOne)
console.log(productTwo)
console.log(productOne.method())
console.log(productTwo.method())