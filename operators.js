/* operators are used to perform operations on operands
1. Arithematic Operators (+, -, *, /)
2. Assignment Operators (+=, -=, *=, /=)
3. Comparision Operators (==, ===, !=)
4. Logical Operators (&&, ||, !)
5. Bitwise Operator
6. Type OPerator*/

// 1. Arithematic Operator(+ - / * % ++ --)

var x = 10;
var y = 20;

var a = x+y
console.log("Addition",a)

var b = x-y
console.log("Sub",b)

var c = x*y
console.log("Mul",c)

var d = x/y
console.log("Div",d)

var e = x%y
console.log("Per",e)

var f = ++x
console.log("Inc",f)

var g = ++y
console.log("Inc",g)

var h = x--
console.log("Dec",h)

var i = y--
console.log("Dec",i)

//2. Comparision Operator

var x = 10;
var y = 20;

var j = x>y  // false
console.log(j)

var k = x<y  //true
console.log(k)

var l = x<=y   //true
console.log(l)

var m = x>=y   //false
console.log(m)

var n = x==y  //false
console.log(n)

var o = x!=y   //true
console.log(o)

//3. String Operator
// + operator is a string operator used to concat two or more strings

var x = "Sai";
var y = `Teja`;
var z = 'Dhulipalla';

var nameOfPerson = x+y+z
console.log(nameOfPerson)
