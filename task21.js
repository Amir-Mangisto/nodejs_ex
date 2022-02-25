const httpServer= require('http').Server;
const fs = require('fs');

class Task21 extends httpServer{
    constructor(){
        super();
        this.listen(4002)
        this.on('request',this.onHandler)
    }
    onHandler = (req,res)=>{
        const stream = fs.createReadStream('./task21.json')
        stream.pipe(res)
    }
}
module.exports = new Task21();