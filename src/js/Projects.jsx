/** @jsx React.DOM */

var React = require('react');
var Project = require('./Project.jsx');

module.exports = React.createClass({
    render: function() {
        return (
            <div>
                <Project
                    title="moolist"
                    link="http://moolist.keithy.me"
                    description="Server side rendered todo list written with Redux and ES6"
                    imgSrc="src/images/moolist.png"
                />
                <Project
                    title="pstmin"
                    link="http://pstmin.com"
                    description="Minimalist pastebin alternative written in Go"
                    imgSrc="src/images/pstmin.png"
                />
                <Project
                    title="Pyramus"
                    link="http://pyramus.keithy.me"
                    description="Reddit clone built on React, PostgresQL, and Node"
                    imgSrc="src/images/pyramus.png"
                />
                <Project
                    title="Chatter"
                    link="http://chatter.keithy.me"
                    description="A multi-room chat app built on Socket.io and React"
                    imgSrc="src/images/chatter.png"
                />
                <Project
                    title="Pomodoro Timer"
                    link="http://keithy.me/pomodoro/"
                    description="Minimalistic, mobile responsive pomodoro timer"
                    imgSrc="src/images/pomodoro.png"
                />
                <Project
                    title="Dota Stats"
                    link="http://dota.keithy.me/"
                    description="A GitHub-like visualization of my Dota 2 playtime, using D3"
                    imgSrc="src/images/mydotastats.png"
                />
                <Project
                    title="Fibonacci Calculator"
                    link="http://keithy.me/fibonacci-calc/"
                    description="An online client side Fibonacci calculator with an explanation. Allows calculation with the recursive way or the dynamically programmed way"
                    imgSrc="src/images/fibonacci.png"
                />
            </div>
        );
    }
});
