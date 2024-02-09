// elseIf

const marks = 55;
if (marks <=  30){
    console.log("failed")
} else if (marks < 60 && marks > 50) {
    console.log("passed with average Marks")
} else if (marks > 60 && marks < 75) {
    console.log("passed with good Marks")
} else {
    console.log(`passed`)
}

const result = 100;
if (result >= 34) {
    console.log("Fail")
}else if (result >= 75 && result <= 100) {
    console.log("1st Class Student")
}else if (result >= 50 && result >= 75) {
    console.log("Average Student")
}else if (result >= 35 && result <= 49){
    console.log("Below Average")
}else {
    console.log("pass")
}
