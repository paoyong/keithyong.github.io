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
                <h2>Why web development?</h2>
                <p>For me, the web is my playground to build applications on. The web is easy to learn but hard to master. While it is relatively easy to code up a decent HTML and CSS website and place it in a server, it is challenging to create not only a good looking website but one that loads fast. A good website relies on a solid backend, and that means writing good APIs on top of a database. It requires coding up a solid server that handles different routes and different front end requests. It requires a front end that not only handles basic user inputs and displays information from the server, but also maintain great design and user experience. While coding up a full stack application is a lot of backbreaking work, I take pride in not only seeing the finished app but learning from mistakes along the way.</p>
                <p>The web landscape changes every year. Who knows where NoSQL will go, who knows how well Angular 2.0 does, or where Javascript will be in a year? Who knows what new design trend will pop up and change the web? For that reason, I push myself to keep learning new things everyday, be it a new Javascript framework or a new CSS framework.</p>
                <p>Despite the amount of work that goes into coding a web application, I am excited to be part of an increasingly popular platform with a great community!</p>
                <h2>About This App</h2>
                <p>I created this single page personal website using <a href="https://facebook.github.io/react/">React</a> and <a href="https://github.com/rackt/react-router">React Router</a>. I chose React because it allows me to avoid code duplication in the Projects and the Travel pages. Before using React, I had to copy and paste the same HTML snippet for each project or each image. But with React, I can just code up a single <a href="https://github.com/keithyong/keithyong.github.io/blob/master/src/js/Project.jsx">Project</a> or <a href="https://github.com/keithyong/keithyong.github.io/blob/master/src/js/ImgurThumbnail.jsx">Thumbnail</a> component, and map each of them to each element of the list of projects and the list of images. This way, I avoid duplicating HTML components by placing them in a single component.</p>
                <p>React Router allows me to create a multi-page website experience into a single page application. Using React Router, I can create multiple routes that exist on the same webpage. This allows for a seamless experience switching between difference pages. The downside is that making a single page application requires additional initial load time, but by minifying the js into a `bundle.min.js`, the initial loadtimes are less of an issue.</p>
                <p><a href="https://webpack.github.io/">webpack</a> unifies all of my JS files together into a single minified bundle.min.js, and I just simply stick that bundle file into my index.html. I am currently working to completely render the index.html on the server side, which reduces the initial load times even more.</p>
                <p>For CSS, I went with sass so that I can utilize variables and config files in my stylesheets. I added a lot of different media queries to ensure that this webpage looks great on any screen size. For the image gallery, I used flexbox code inspired by the project <a href="https://github.com/gpbl/isomorphic500">gpbl/isomorphic500</a> to render a beautiful and responsive image gallery without using any javascript frameworks. I then build the css into a minified css file and place that on my index.html.</p>
                <h2>Contacts</h2>
                <p>You can email me at <a href="mailto:terda12@gmail.com">terda12@gmail.com</a> and download my resume <a href="resume/resume.pdf">here</a>.</p>

            </div>
        )
    }
});
