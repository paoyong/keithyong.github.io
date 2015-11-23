/** @jsx React.DOM */

var React = require('react');
var Thumbnail = require('./Thumbnail.jsx');

module.exports = React.createClass({
    render: function() {
        var images = this.props.images;

        var thumbnails = images.map(function(image) {
            return (
                <Thumbnail
                    thumbnailURL={image.thumbnailURL}
                    imageURL={image.imageURL}
                    description={image.description}
                />
            )
        });

        var galleryTitle, galleryDescription;

        if (this.props.title) {
            galleryTitle = <p className="gallery-title">{this.props.title}</p>;
        }

        if (this.props.description) {
            galleryDescription = <p className="gallery-description">{this.props.description}</p>
        }

        // Deleted gallery descriptions for now.
        return (
            <div className="gallery-wrapper">
                {galleryTitle}
                <div className="gallery">
                    {thumbnails}
                </div>
            </div>
        );
    }
});
