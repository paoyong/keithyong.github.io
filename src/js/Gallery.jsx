/** @jsx React.DOM */

var React = require('react');
var ImgurThumbnail = require('./ImgurThumbnail.jsx');

module.exports = React.createClass({
    render: function() {
        var images = this.props.images;

        var thumbnails = images.map(function(image) {
            return (
                <ImgurThumbnail imgurCode={image.imgur_code} />
            )
        });

        return (
            <div className="gallery-wrapper">
                <h2 className="gallery-title">{this.props.title}</h2>
                <div className="gallery">
                    {thumbnails}
                </div>
            </div>
        );
    }
});
