/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
    componentDidMount: function() {
        document.title = "Keith Yong - Web Developer"
    },
    propTypes: {
        link: React.PropTypes.string.isRequired,
        description: React.PropTypes.string.isRequired,
        imgSrc: React.PropTypes.string.isRequired
    },
    render: function() {
        return (
            <a className="row project" href={this.props.link}>
                <h2>{this.props.title}</h2>
                <p className="project-description">{this.props.description}</p>
                <img src={this.props.imgSrc} className="u-max-full-width" alt="project-img"></img>
            </a>
        );
    }
});
