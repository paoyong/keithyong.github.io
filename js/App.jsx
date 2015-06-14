var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var About = require('./About.jsx');

var App = React.createClass({
    render: function() {
        return (
            <div>
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
                            </ul>
                        </div>
                    </nav>
                    <RouteHandler />
                </div>
                <footer>
                    <div className="footer-content">
                        © 2015 Keith Yong • <a href='http://twitter.com/keithynator'>Twitter</a> • <a href='http://github.com/keithyong'>GitHub</a>
                    </div>
                </footer>
            </div>
        );
    }
});

var routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="projects" handler={Projects} />
        <Route name="about" handler={About} />
    </Route>
);

Router.run(routes, function(Handler) {
    React.render(<Handler />, document.getElementById('react-mount'));
});
