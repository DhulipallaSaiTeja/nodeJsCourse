// string methods

//1. Length : length method is used to find the length of string

const a = "Sai Teja"
const b = a.length
console.log(b,a)

const c = "Dhulipalla"
const d = c.length
console.log(c,d)

//2. Concat : this method is used to join two or more stirngs

const e = "Sai"
const f = "Teja"
const g = "Dhulialla"
console.log(e.concat(f,g))


//3. Trim : trim method is used to trim or remove the space between strings

const h = "    Praveen Kolla           "
console.log(h.trim())

const i = "   Buddha   CEO"
console.log(i.trim())

const fullname = "   Sai Teja Dhulipalla   " ;
console.log(fullname.trim())


//4. replace : replace string is used to replace one string with another

const oldName = "5 star"
const  newName = "Dairy Milk"
const output = oldName.replace(oldName, newName)
console.log(output)

const j = "Praveen"
const k = "Sai"
const l = j.replace(j,k)
console.log(l)

const m = "mainFrames"
const n = "javaScript"
const o = m.replace(m,n)
console.log(o)


//5. upperCase : this method is used to convert capital letters to small letters

const p = "SAITEJA"
const q = p.toLowerCase()
console.log(q)

const r = "DHULIPALLA"
console.log(r.toLowerCase())


//6. lowercase : this method is used to convert small letters to capital letters


const s = "saiteja"
console.log(s.toUpperCase())

const t = "dhulipalla"
console.log(t.toUpperCase())

//7. search : search method is used to search the position of a letter in string

const u = "foundation"
console.log(u.search("d"))


const v = "Bangaluru"
console.log(v.search("u"))


//8. indexOf : indexOf method is used to find 1st position of letter in string

const w = "Hyderabad"
console.log(w.indexOf("d"))


//9. lastIndexOf : lastIndexOf method is used to find last position of letter
//                 in a string

const x = "Amaravathi"
console.log(x.lastIndexOf("a"))

//10. slice : 

const y = "Ajay, Bharath, Vamsi, Bharath"
console.log(y.slice(22,28))

const z = "Saiiiiiiiii"
console.log(z.slice(3,11))

//11. split :

const aa = "Sai Teja"
console.log(aa.split(`,`))


const ab = "Buddha CEO"
console.log(ab.split(` `))

const ac = "Foundation"
console.log(ac.split(``))