// task-1

const person = {
    fname:"Ahmed",
    lname:"Hossam",
    age:20,
    city:"Alex"
}

const personJson = JSON.stringify(person)

const fs = require("fs")

fs.writeFileSync("data1.json", personJson)

fs.readFileSync("data1.json").toString()
console.log(fs.readFileSync("data1.json").toString())

let personObj = JSON.parse(personJson)

personObj={fname:"Adel",lname:"Ahmed",age:40,city:"Cairo"}


console.log(personObj)

const personJson2 = JSON.stringify(personObj)

fs.writeFileSync("data2.json",personJson2)

console.log(personJson2)