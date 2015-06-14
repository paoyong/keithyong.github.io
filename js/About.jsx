/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="row about">
                <img src="images/avatar.png" id="avatar" alt="avatar"></img>
                <h2>Hello!</h2>
                <p>My name is Keith Yong. I am a junior Computer Science student at the <a href="http://www.udel.edu/">University of Delaware</a>. I focus on full stack web development on the <a href="http://nodejs.org/">Node.js</a> environment as well as mobile responsive web design using <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3">modern CSS3</a> .</p>
                <p>In my free time you can find me buying hipster coffee in NYC, playing Dota 2, and doing <a href="http://startingstrength.wikia.com/wiki/Starting_Strength_Wiki">Starting Strength</a>.</p>
                <p>You can email me at <a href="mailto:terda12@gmail.com">terda12@gmail.com</a> and download my resume <a href="resume.pdf">here</a>.</p>
            </div>
        )
    }
});
