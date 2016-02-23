/** @jsx React.DOM */

var React = require('react');
var Project = require('./Project.jsx');

module.exports = React.createClass({
    render: function() {
        return (
            <div>
                <div className="row content">
                    <p>Hello! I am a 22 year old senior Computer Science student at the <a href="http://www.udel.edu/">University of Delaware</a> with a passion for front-end web development and design. I love making apps that are not only easy to use but also look great. With every project I work on, I always aim to learn something new. You can email me at <a href="mailto:terda12@gmail.com">terda12@gmail.com</a> and download my resume <a href="resume/resume.pdf">here</a>.</p>

                </div>
                <Project
                    title="moolist"
                    link="http://moolist.keithy.me"
                    description="Server side rendered, ultra minimal todo list written with Redux and ES6."
                    imgSrc="src/images/moolist.png"
                />
                <Project
                    title="Pyramus"
                    link="http://pyramus.keithy.me"
                    description="Reddit clone built on React, PostgresQL, and Node."
                    imgSrc="src/images/pyramus.png"
                />
                <Project
                    title="Chatter"
                    link="http://chatter.keithy.me"
                    description="A multi-room chat app built on Socket.io and React."
                    imgSrc="src/images/chatter.png"
                />
                <Project
                    title="Pomodoro Timer"
                    link="http://keithy.me/pomodoro/"
                    description="Minimalistic, mobile responsive pomodoro timer."
                    imgSrc="src/images/pomodoro.png"
                />
                <Project
                    title="Dota Stats"
                    link="http://dota.keithy.me/"
                    description="A GitHub-like visualization of my Dota 2 playtime, using D3."
                    imgSrc="src/images/mydotastats.png"
                />
                <Project
                    title="Fibonacci Calculator"
                    link="http://keithy.me/fibonacci-calc/"
                    description="An online client side Fibonacci calculator with an explanation. Allows calculation with the recursive way or the dynamically programmed way."
                    imgSrc="src/images/fibonacci.png"
                />
            </div>
        );
    }
});
