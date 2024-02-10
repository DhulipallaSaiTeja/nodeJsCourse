// Array Methods

//1. push : Push method is used to adding an element at last position of an array

const a = [0,1,2,3,4]
const b = a.push(5)
console.log(a,b)

const c = [0,10,20,30,40]
const d = c.push(50)
console.log(c,d)

//2. unshift : pushing an element at 1st position of an array

const e = [1,2,3,4,5]
const f = e.unshift(0)
console.log(e,f)

const g = [10,20,30,40,50]
const h = g.unshift(0)
console.log(g,h)

//3. shift : Deleting an element at 1st position of an array

const i = [0,1,2,3,4,5]
const j = i.shift()
console.log(i,j)

const k = [1000,10,20,30,40,50]
const l = k.shift()
console.log(k,l)

//4. pop : pop method is used to delete last element in an array

const m = [10,20,30,40,50,60]
const n = m.pop()
console.log(m,n)

const o = [100,200,300,400,500,600]
const p = o.pop()
console.log(o,p)

//5. reverse : reverse method is used to reverse an array

const q = [0,10,20,30,40,50]
const r = q.reverse()
console.log(r)

const s = [0,100,200,300,400,500]
const t = s.reverse()
console.log(s)

//6. length : length method is used to find the length of an array

const u = [0,1,2,3,4,5,6,7,8,9,10]
const v = u.length
console.log(v)

const w = [0,1,2,3,51,52,52,52,52,42,512,51,51,541,2545,541,5,41,55,6,999999]
const x = w.length
console.log(x) 

//7. Concatination : Concat method is used to combine two or more strings

const y = "Sai"
const z = "Teja"
console.log(y.concat(z))

const aa = "Sai"
const ab = " Teja"
const ac = " and"
const ad = " Praveen"
const ae = " are"
const af = " Friends"
console.log(aa.concat(ab,ac,ad,ae,af))

// 8. Splice : splice method is used to delete an element 
//             and adding another element in an array

//     array = (starting of index position, position of deleting element, 
//              adding element)

const ag = [10,20,40,50,60]
console.log(ag.splice(0,2,30),ag)

const ah = [28,264,42258,22,7,86,10,20,30,40,50]
console.log(ah.splice(0,6,0))
console.log(ah)

//9. slice  : slice method is used delete particular elements

// array = slice(index position,element position)

const ai = ["Sai","Praveen","Teja"]
console.log(ai.slice(1,2))

const aj = ["Buddha","CEO","Quantum","Core","Foundation"]
console.log(aj.slice(3,4))

const ak = ["Buddha","CEO","Quantum","Core","Foundation"]
console.log(ak.slice(3,4))

//10. toString : tostring method is used to convert an array into string

const al = [1,2,3,4,5]
const am = al.toString()
console.log(al, typeof al)
console.log(am, typeof am)

const an = [10,20,30,40,50]
const ao = an.toString()
console.log(an, typeof an)
console.log(ao, typeof ao)
