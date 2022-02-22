const httpServer = require('http').Server;
const util=require('util');
const fs =require('fs');
const readFilePromise = util.promisify(fs.readFile);

class Event16 extends httpServer{
    constructor(){
        super();
        this.listen(9090);
        this.on('request',this.onMovies)
    }
    onMovies =(req,respond)=>{
        readFilePromise('./task16.json')
        .then((res)=>{respond.end(res)})
        .catch((err)=>{console.log("error");})
    }
}
module.exports =new Event16();