/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <footer>
                <div className="container">
                    Keith Yong 2015{' - '}
                    <a href="http://twitter.com/keithynator">Twitter</a>
                    {' - '}
                    <a href="http://github.com/keithyong">GitHub</a>
                    {' - '}
                    Made with <a href="https://facebook.github.io/react/">React</a> and <a href="https://github.com/rackt/react-router">react-router</a>.
                </div>
            </footer>
        );
    }
})
