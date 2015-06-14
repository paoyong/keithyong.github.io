/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <footer>
                <div className="footer-content">
                    {'\u00A9 2015 Keith Yong \u2022 '}
                    <a href="http://twitter.com/keithynator">Twitter</a>
                    {' \u2022 '}
                    <a href="http://github.com/keithyong">GitHub</a>
                    {' \u2022 '}
                    Made with <a href="https://facebook.github.io/react/">React</a> and <a href="https://github.com/rackt/react-router">react-router</a>.
                </div>
            </footer>
        );
    }
})
