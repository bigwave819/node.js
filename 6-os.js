const os = require('os');

// see the info about the current user
const user = os.userInfo()
console.log(user);

// the system running uptime in the seconds
console.log(`the system ptime is ${os.uptime()} seconds`);

const osInfo = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(osInfo);