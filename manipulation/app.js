// const amount = 2;
// if (amount < 10){
//     console.log("small number")
// }
// else{
//     console.log("large number")
// }
// console.log("Hello world it's my first node app")

// console.log(__dirname)

// setInterval(()=>{
//     console.log(" hello otina")
// },1000)

// console.log(name)
let name = require("./names")
let greetings = require("./call")
let data = require("./alt")

require("./grenade")
greetings(name.anne)
greetings(name.brian)
greetings(name.john)

console.log(`hey you`)
