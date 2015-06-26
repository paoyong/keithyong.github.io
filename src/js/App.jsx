/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Route = Router.Route;
var Redirect = Router.Redirect;
var RouteHandler = Router.RouteHandler;
var About = require('./About.jsx');
var Projects = require('./Projects.jsx');
var Footer = require('./Footer.jsx');

require('../css/style.scss')

var App = React.createClass({
    render: function() {
        return (
            <div className="app">
                <div className="container">
                    <nav>
                        <div className="row" id="name">
                            <Link to="about">
                                <h1>Keith Yong</h1>
                            </Link>
                        </div>
                        <div className="row headerlinks">
                            <ul className="tabs">
                                <li><Link to="projects">Projects</Link></li>
                                <li><Link to="about">About</Link></li>
                                <li><a href="https://github.com/keithyong">GitHub</a></li>
                                <li><a href="/resume/resume.pdf">Resume</a></li>
                            </ul>
                        </div>
                    </nav>
                    <RouteHandler />
                </div>
                <Footer />
            </div>
        );
    }
});

var routes = (
    <Route path="/" handler={App}>
        <Redirect from="/" to="projects" />
        <Route name="projects" handler={Projects} />
        <Route name="about" handler={About} />
    </Route>
);

Router.run(routes, function(Handler) {
    React.render(<Handler />, document.getElementById('react-mount'));
});
