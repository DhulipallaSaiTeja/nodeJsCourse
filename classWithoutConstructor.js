// Class Method using constructor

class noteBook {
    Type = "Book";
    Makers = "ClassMate";
    Pages = 100;
    Price = 40
    method()
    {
        return`${this.Type},${this.Makers},${this.Pages},${this.Price}`
    }
}
var firstBook = new noteBook
console.log(firstBook)
console.log(firstBook.method())

class vehical{
    Model = "FreeStyle";
    Company = "Ford";
    Colour = "Red";
    Transmission = "Manual"
    method()
    {
        return `${this.Model}${this.Company}${this.Colour}${this.Transmission}`
    }
}
var car = new vehical
console.log(car)
console.log(car.method())