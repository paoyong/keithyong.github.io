/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
    render: function() {
        var imgHref = "http://i.imgur.com/" + this.props.imgurCode + ".jpg";
        var imgThumb = "http://i.imgur.com/" + this.props.imgurCode + "m.jpg";

        var imgStyle = "background-image:url(\"" + imgThumb + "\")";

        return (
            <div className="thumbnail-wrapper">
                <a className="thumbnail" style={imgStyle} href={imgHref} >

                </a>
            </div>
        )
    }
});
