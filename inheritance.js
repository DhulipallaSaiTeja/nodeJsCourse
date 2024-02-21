// Inheritance

class car{
    constructor(Name,Model,Year,Fuel)
    {
        this.Name = Name;
        this.Model = Model;
        this.Year = Year;
        this.Fuel = Fuel
    }
    method()
    {
        return`${this.Name}${this.Model}${this.Year}${this.Fuel}`
    }
}
class carOne extends car{
    constructor(Name,Model,Year,Fuel,Colour)
    {
        super(Name,Model,Year,Fuel)
        this.Colour = Colour
    }
    methodJunior()
    {
        return`${this.Name}${this.Model}${this.Year}${this.Fuel}${this.Colour}`
    }
}
let own = new car(`Ford`,`FreeStyle`,2019,`Petrol`)
let ownCar = new carOne(`Ford`,`FreeStyle`,2019,`Petrol`,`Red`)
console.log(own)
console.log(ownCar)
console.log(ownCar.methodJunior())
console.log(own.method())


class vehical{
    constructor(Model,Makers,Colour,Gear)
    {
        this.Model = Model;
        this.Makers = Makers;
        this.Colour = Colour;
        this.Gear = Gear;
    }
    method()
    {
        return`${this.Model}${this.Makers}${this.Colour}${this.Gear}`
    }
}
class twoWheeler extends vehical{
    constructor(Model,Makers,Colour,Gear,CC)
    {
        super(Model,Makers,Colour,Gear)
        this.CC = CC
    }
    methodTwo()
    {
        return`${this.Model}${this.Makers}${this.Colour}${this.Gear}${this.CC}`
    }
}
let ownBike = new vehical(`Pulsar`,`Bajaj`,`RacingRed`,5)
let ownSecondBike = new twoWheeler(`Pulsar`,`Bajaj`,`RacingRed`,5,250)
console.log(ownBike)
console.log(ownSecondBike)
console.log(ownBike.method())
console.log(ownSecondBike.methodTwo())