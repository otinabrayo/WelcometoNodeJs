
const EventEmitter = require('events');

let url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    log = (message) => {
        // send http request
        console.log(message);
    
        // Raise: logging(data: message)
        this.emit('logging', { id:1, messege:'roger tango ecma script 6 roger!! roger!!'})
    }
}

module.exports = Logger;