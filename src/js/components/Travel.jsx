/** @jsx React.DOM */

var React = require('react');
var Gallery = require('./Gallery.jsx');

var imgurPics = require('./data/imgurPics.js');

module.exports = React.createClass({
    componentDidMount: function() {
        document.title = "Keith Yong - Travel"
    },
    render: function() {
        var summer2015Galleries = imgurPics.travel.summer_2015.map(function(gallery) {
            var description = '';
            if (gallery.description) {
                description = gallery.description;
            }

            return (
                <Gallery
                    images={gallery.images}
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
