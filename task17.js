const httpServer = require('http').Server;
const util=require('util');
const fs =require('fs');
const readFilePromise = util.promisify(fs.readFile);

class Task17 extends httpServer{
    constructor(){
        super()
        this.listen(9000)
        this.on('request',this.onParot)
    }
    onParot =((req,respond)=>{
        readFilePromise('./task17.json')
        .then((res)=>{respond.end(res)})
        .catch((err)=>{console.log("try again");})
    })
}
module.exports = new Task17();