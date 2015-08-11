/** @jsx React.DOM */

var React = require('react');
var Gallery = require('./Gallery.jsx');

var imgurPics = require('./data/imgurPics.js');

module.exports = React.createClass({
    render: function() {
        var summer2015Galleries = imgurPics.travel.summer_2015.map(function(gallery) {
            return (
                <Gallery
                    images={gallery.images}
                    title={gallery.title}
                />
            );
        });

        return (
            <div className="row content">
                <h1>Summer 2015</h1>
                {summer2015Galleries}
            </div>
        )
    }
});
