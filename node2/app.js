const EventEmitter = require('events');

const Logger = require('./logger')
const logger = new Logger();

// Register  a listener 
logger.on('logging', arg => console.log(arg));

logger.log('message')