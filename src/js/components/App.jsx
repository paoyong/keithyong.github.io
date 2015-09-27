/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Route = Router.Route;
var Redirect = Router.Redirect;
var RouteHandler = Router.RouteHandler;
var About = require('./About.jsx');
var Travel = require('./Travel.jsx');
var Projects = require('./Projects.jsx');
var Footer = require('./Footer.jsx');

var App = React.createClass({
    render: function() {
        return (
            <html>
                <body>
                    <div className="app">
                        <div className="container">
                            <nav>
                                <div id="name">
                                    <Link to="about">
                                        <h1>Keith Yong</h1>
                                    </Link>
                                </div>
                                <div className="headerlinks">
                                    <ul className="tabs">
                                        <li><Link to="projects">Projects</Link></li>
                                        <li><Link to="about">About</Link></li>
                                        <li><Link to="travel">Travel</Link></li>
                                        <li><a href="https://keithy.artstation.com/">Art</a></li>
                                        <li><a href="https://github.com/keithyong">GitHub</a></li>
                                    </ul>
                                </div>
                            </nav>
                            <RouteHandler />
                        </div>
                        <Footer />
                    </div>
                </body>
            </html>
        );
    }
});

var routes = (
    <Route path="/" handler={App}>
        <Redirect from="/" to="projects" />
        <Route name="projects" handler={Projects} />
        <Route name="about" handler={About} />
        <Route name="travel" handler={Travel} />
    </Route>
);

Router.run(routes, function(Handler) {
    React.render(<Handler />, document.getElementById('react-mount'));
});
