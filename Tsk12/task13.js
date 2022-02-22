const httpServer = require('http').Server;
const util=require('util');
const fs =require('fs');
const readFilePromise = util.promisify(fs.readFile);

class Django extends httpServer{
    constructor(){
        super();
        this.listen(8000);
        this.on('request',this.onDjango)

    }
    onDjango = (req,respond)=>{
        readFilePromise('./django.txt')
        .then((res)=>{respond.end(res);})
        .catch((err)=>{console.log("error");})

        
        // fs.readFile('./django.txt',(err,res)=>{
        //     if(err){
        //         console.log("sasas");
        //     }
        //     else{
        //         respond.end(res)
        //     }
        // })
    }
}
module.exports =new Django();