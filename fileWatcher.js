const { spawn } = require('child_process');
const { log } = require('console');
const fs =require('fs')

fs.watch('babu.txt',()=>{
    const ls=spawn('ls',['-l','-h','babu.txt']);
    let output='';
    ls.stdout.on('data',chunk=>output +=chunk)
    ls.on('close',()=>{
        const parts=output.split(/\s+/)
        console.log([parts[0], parts[4], parts[8]]);

})
})