/*
    A singleton that operates as the central hun for application updates.
*/

var Dispatcher = require('flux').Dispatcher;

module.exports = new Dispatcher();