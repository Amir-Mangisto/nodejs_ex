const EventEmitter = require('events');
const fs=require('fs');

class Event9 extends EventEmitter{
    constructor(){
        super();
        this.on('event9',this.onEvent9)
    }
    onEvent9(fileName){
        fs.writeFile(fileName,"im always listening" ,()=>{})
    }
    emitEvent9(fileName){
        this.emit('event9',fileName)
    }
}
module.exports = new Event9();