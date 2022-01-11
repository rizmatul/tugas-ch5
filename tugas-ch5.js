const fs = require('fs')
const os = require ('os');
const cpuInfo = os.cpus();

console.log(cpuInfo)

const jsonString = JSON.stringify(cpuInfo)
fs.writeFile('./cpu.json', jsonString, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file')
    }
})

