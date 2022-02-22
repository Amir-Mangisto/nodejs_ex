const EventEmitter = require('events');
const fs=require('fs');
class Event11 extends EventEmitter{
    constructor(){
        super();
        this.on('event11',this.onEvent11)
    }
    onEvent11(array){
        fs.writeFile('event11.json',JSON.stringify(array),()=>{})
    }
    emitEvent11(array){
        this.emit('event11',array)
    }
}
module.exports =new Event11();