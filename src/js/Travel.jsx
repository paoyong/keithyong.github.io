/** @jsx React.DOM */

var React = require('react');
var imgurPics = require('./data/imgurPics.js');
console.log(imgurPics);

module.exports = React.createClass({
    render: function() {
        return (
            <div className="row content">
                <h1>Travels</h1>
                <h2>Norway</h2>
            </div>
        )
    }
});
