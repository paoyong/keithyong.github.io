/** @jsx React.DOM */

var React = require('react');
var Project = require('./Project.jsx');

module.exports = React.createClass({
    render: function() {
        return (
            <div>
                <Project
                    title="Pyramus"
                    link="http://pyramus.keithy.me"
                    description="Reddit clone built on React, PostgresQL, and Node."
                    imgSrc="images/pyramus.png"
                />
                <Project
                    title="Chatter"
                    link="http://chatter.keithy.me"
                    description="A multi-room chat app built on Socket.io and React."
                    imgSrc="images/chatter.png"
                />
                <Project
                    title="Pomodoro Timer"
                    link="http://keithy.me/pomodoro/"
                    description="Minimalistic, mobile responsive pomodoro timer."
                    imgSrc="images/pomodoro.png"
                />
                <Project
                    title="Dota Stats"
                    link="http://dota.keithy.me/"
                    description="A GitHub-like visualization of my Dota 2 playtime, using D3."
                    imgSrc="images/mydotastats.png"
                />
                <Project
                    title="Fibonacci Calculator"
                    link="http://keithy.me/fibonacci-calc/"
                    description="An online client side Fibonacci calculator with an explanation. Allows calculation with the recursive way or the dynamically programmed way."
                    imgSrc="images/fibonacci.png"
                />
                <Project
                    title="Castle Neuschwanstein"
                    link="http://keithy.me/Castle-Neushwanstein/"
                    description="Shows Wikipedia information about Castle Neuschwanstein, a castle in Germany. Designed with a newspaper look in mind."
                    imgSrc="images/castle.png"
                />
            </div>
        );
    }
});
