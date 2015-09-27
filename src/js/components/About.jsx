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
                <p>In my free time you can find me in a hipster coffee shop, painting, or playing Dota 2.</p>
                <h2>About This App</h2>
                <p>I created this single page personal website using React and React Router. I chose React because it allows me to avoid code duplication in the Projects and the Travel pages. Before using React, I had to copy and paste the same HTML snippet for each project or each image. But with React, I can just code up a single <a href="https://github.com/keithyong/keithyong.github.io/blob/master/src/js/Project.jsx">Project</a> or <a href="https://github.com/keithyong/keithyong.github.io/blob/master/src/js/ImgurThumbnail.jsx">Thumbnail</a> component, and map each of them to each element of the list of projects and the list of images. This way, I avoid duplicating HTML components by placing them in a single component.
                <p>React Router allows me to create a multi-page website experience into a single page application. Using React Router, I can create multiple routes that exist on the same webpage. This allows for a seamless experience switching between difference pages. The downside is that making a single page application requires additional initial load time, but by minifying the js into a `bundle.min.js`, the initial loadtimes are less of an issue.</p>
                <h2>Contacts</h2>
                <p>You can email me at <a href="mailto:terda12@gmail.com">terda12@gmail.com</a> and download my resume <a href="resume/resume.pdf">here</a>.</p>
            </div>
        )
    }
});
