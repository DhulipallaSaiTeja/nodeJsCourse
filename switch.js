/* variable = value
switch (expression)
{
    case ``:
    printing statement
    break;
    case ``:
    printing statement
    break;
    case ``:
    printing statement
    break;
    default:
    printing statement if above cases are not match
}*/

const day = "Wednesday"
switch (day)
{
    case ("Monday"):
    console.log("it's Working Day")
    break;
    case ("Tuesday"):
    console.log("it's Working Day")
    break;
    case ("Wednesday"):
    console.log("it's Working Day")
    break;
    case ("Thursday"):
    console.log("it's Working Day")
    break;
    case ("Friday"):
    console.log("it's Working Day")
    break;
    case ("Saturday"):
    console.log("it's not Working Day")
    break;
    case ("Sunday"):
    console.log("it's not Working Day")
    break;
    default :
    console.log("the above given days are not correct")
}

const movies = "Akhanda"
switch(movies)
{
    case ("Akhanda") :
    console.log("Balayya Movie")
    break;
    case ("Devara") :
    console.log("NTR Movie")
    break;
    case ("OG") :
    console.log("PK Movie")
    break;
    case ("Salar") :
    console.log("prabhas Movie")
    break;
    default :
    console.log("the above given are not correct")
}