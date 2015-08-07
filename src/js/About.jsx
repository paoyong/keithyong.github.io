/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="row content">
                <img src="src/images/avatar.png" id="avatar" alt="avatar"></img>
                <h2>Hello!</h2>
                <p>My name is Keith. I am a senior Computer Science student at the <a href="http://www.udel.edu/">University of Delaware</a>. I focus on front-end web development using <a href="https://facebook.github.io/react/">React.js</a>, and I also do full stack work on <a href="https://nodejs.org/">Node</a> and <a href="http://flask.pocoo.org/">Flask</a>. My database of choice is <a href="http://www.postgresql.org/">PostgreSQL</a>.</p>
                <p>In my free time you can find me buying a bag of <a href="https://www.stumptowncoffee.com/">Stumptown</a> coffee in NYC, painting a still life oil, or playing some <a href="https://www.dota2.com/reborn/part1/">Dota 2</a>.</p>
                <p>In July 2015, I hiked around the island of <a href="http://bit.ly/1MacsFR">Moskenesoya</a> in Lofoten, Norway!</p>
                <h2>Contacts</h2>
                <p>You can email me at <a href="mailto:terda12@gmail.com">terda12@gmail.com</a> and download my resume <a href="resume/resume.pdf">here</a>.</p>
            </div>
        )
    }
});
