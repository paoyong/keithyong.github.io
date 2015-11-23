/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
    render: function() {

        var imgStyle = {
            backgroundImage: "url(\"" + this.props.thumbnailURL + "\")"
        };

        return (
            <div className="thumbnail-wrapper">
                <a className="thumbnail" style={imgStyle} href={this.props.imageURL} >
                </a>
            </div>
        )
    }
});
