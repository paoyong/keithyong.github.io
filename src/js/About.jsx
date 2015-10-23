/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
    componentDidMount: function() {
        document.title = "Keith Yong - About"
    },
    render: function() {
        return (
            <div className="row content">
                <img src="src/images/avatar.png" id="avatar" alt="avatar"></img>
                <h2>Hello!</h2>
                <p>My name is Keith. I am a senior Computer Science student at the <a href="http://www.udel.edu/">University of Delaware</a>. I focus on front-end web development using <a href="https://facebook.github.io/react/">React.js</a>, and I also do full stack work on <a href="https://nodejs.org/">Node</a>. My database of choice is <a href="http://www.postgresql.org/">PostgreSQL</a>.</p>
                <p>In my free time you can find me in a hipster coffee shop, oil painting, or playing Dota 2.</p>
                <h2>Contacts</h2>
                <p>You can email me at <a href="mailto:terda12@gmail.com">terda12@gmail.com</a> and download my resume <a href="resume/resume.pdf">here</a>.</p>

            </div>
        )
    }
});
