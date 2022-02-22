const EventEmitter = require('events');
const fs=require('fs');

class Event10 extends EventEmitter{
    constructor(){
        super();
        this.on('event10',this.onEvent10)
    }
    onEvent10(fileName,info){
        fs.writeFile(fileName,info,()=>{})

    }
    emitEvent10(fileName,info){
        this.emit('event10',fileName,info)
    }
}
module.exports =new Event10();