/** @jsx React.DOM */

var React = require('react');
var Gallery = require('./Gallery.jsx');

var art2015 = require('json!./data/art2015.json');
var art2014 = require('json!./data/art2014.json');

module.exports = React.createClass({
    componentDidMount: function() {
        document.title = "Keith Yong - Travel"
    },
    render: function() {
        var art2014_galleries = art2014.map(function(gallery) {
            var description = gallery.description ? gallery.description : '';

            return (
                <Gallery
                    images={gallery.images}
                    title={gallery.title}
                    description={description}
                />
            );
        });

        var art2015_galleries = art2015.map(function(gallery) {
            var description = gallery.description ? gallery.description : '';

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
                <p className="travel-date">2015</p>
                {art2015_galleries}
                <p className="travel-date">2014</p>
                {art2014_galleries}
            </div>
        )
    }
});
