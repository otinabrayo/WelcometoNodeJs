let os = require("os")

// Info abt current user
const user = os.userInfo()
console.log(user)

// method returns system uptime in secs
console.log(`System uptime is ${os.uptime()} seconds`)

let newOs = {
    name:os.type(),
    release:os.release(),
    tmem:os.totalmem(),
    freemem:os.freemem(),
}
console.log(newOs)
