/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
    render: function() {
        var imgHref = "http://i.imgur.com/" + this.props.imgurCode + ".jpg";

        // Here, append m.jpg or l.jpg depending on desired thumbnail size.
        var imgThumb = "http://i.imgur.com/" + this.props.imgurCode + "h.jpg";

        var imgStyle = {
            backgroundImage: "url(\"" + imgThumb + "\")"
        };

        return (
            <div className="thumbnail-wrapper">
                <a className="thumbnail" style={imgStyle} href={imgHref} >
                </a>
            </div>
        )
    }
});
