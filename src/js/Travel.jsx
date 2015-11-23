/** @jsx React.DOM */

var React = require('react');
var Gallery = require('./Gallery.jsx');

var summer2015 = require('json!./data/summer2015.json');

module.exports = React.createClass({
    componentDidMount: function() {
        document.title = "Keith Yong - Travel"
    },
    render: function() {
        var summer2015Galleries = summer2015.map(function(gallery) {
            var description = gallery.description ? gallery.description : '';

            var images = gallery.images.map(function(img) {
                return {
                    thumbnailURL: "http://i.imgur.com/" + img.imgur_code + "h.jpg",
                    imageURL: "http://i.imgur.com/" + img.imgur_code + ".jpg",
                    description: img.location
                }
            });

            return (
                <Gallery
                    images={images}
                    title={gallery.title}
                    description={description}
                />
            );
        });

        return (
            <div className="row content">
                <p className="travel-date">SUMMER 2015</p>
                {summer2015Galleries}
            </div>
        )
    }
});
