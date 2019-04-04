"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
    render: function () {
        return (

            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="app" className="navbar-brand" style={{ padding: '5px 10px' }} href="#">
                            <img src="images/logo.png" style={{ maxHeight: '100%' }} />
                        </Link>
                    </div>
                    <div className="collapse navbar-collapse" id="main-menu">
                        <ul className="nav navbar-nav">
                            <li><Link to="app">Home</Link></li>
                            <li><Link to="authors">Authors</Link></li>
                            <li><Link to="about">About</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
});

module.exports = Header;