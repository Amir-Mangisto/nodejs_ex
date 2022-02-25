const httpServer = require('http').Server;
const fs =require('fs');

class Task20 extends httpServer{
    constructor(){
        super()
        this.listen(3002)
        this.on('request',this.onHandler)
    }
    onHandler =(req, res)=>{
        const stream = fs.createReadStream('./task20.json')
        stream.pipe(res)
    }
}
module.exports =new Task20()