"use strict";

var React = require('react');

var About = React.createClass({
    statics: {
        willTransitionTo: function (transition, params, query, callback) {
            if (!confirm('willTransitionTo says: Are you sure you want to read this page?')) {
                transition.abort();
            } else {
                callback();
            }
        },
        willTransitionFrom: function (transition, component) {
            if (!confirm('willTransitionFrom says: Are you sure you want to leave the page?')) {
                transition.abort();
            } 
        }
    },
    render: function () {
        return (
            <div>
                <h1>About</h1>
                <ul>
                    <li>React</li>
                    <li>React Router</li>
                    <li>Flux</li>
                </ul>
            </div>
        );
    }
});

module.exports = About;