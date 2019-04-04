"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');


//HTML 5 History API (IE 10+)
/*
Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler />, document.getElementById("app"));
});
*/

//For old browser support
Router.run(routes, function (Handler) {
    React.render(<Handler />, document.getElementById("app"));
});





