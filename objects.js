// Objects

const a = { 
    name: " sai",
    age : 22,
    city : " guntur "
}
console.log(a)
console.log(a.name)

//group of objects created in an array

const b = [{name: ' Sai',age: 22, city: "GUNTUR"},
{name: "Bhaskar",age: 23, city: "GUNTUR"},
{name: "Mani",age: 22, city: "GUNTUR"}]

console.log(b)
console.log(b[0].name, b[1].name, b[0].city)

const c = [{Name: 'Yaswanth', Village : "Enamadala", District: "GUNTUR"},
{Name: 'Sai', Village : "Tikkireddypalem", District: "GUNTUR"}]
console.log(c[0].Village,c[1].Village)
console.log(c[0].District,c[1].District)

const d = [{Name:`sai`,School:`Sri Chaithanya`,Place:`Guntur`},
{Name:`Vamsi`,School:`Sri Chaithanya`,Place:`Guntur`},
{Name:`Bhargav`,School:`Sri Chaithanya`,Place:`Guntur`}]
console.log(d[0].Name)
console.log(d[0].School)
console.log(d[0].Place)

const e = [{CompanyName:`Ford`,Model:`FreeStyle`,Color:`Red`},
{CompanyName:`Suzuki`,Model:`Baleno`,Color:`Mayroon`},
{CompanyName:`Toyota`,Model:`Innova`,Color:`Sliver`},
{CompanyName:`Suzuki`,Model:`Swift`,Color:`White`}]

console.log(e[0].CompanyName,e[1].CompanyName,e[2].CompanyName,e[3].CompanyName)
console.log(e[0].Model,e[1].Model,e[2].Model,e[3].Model)
console.log(e[0].Color,e[1].Color,e[2].Color,e[3].Color)

console.log(e[0].Model)
console.log(e[1].Model)