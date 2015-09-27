var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Root = require('./components/Root.jsx');
var Projects = require('./components/Projects.jsx');
var About = require('./components/About.jsx');

var Routes = (
    <Route path="/" handler={App}>
        <Redirect from="/" to="projects" />
        <Route name="projects" handler={Projects} />
        <Route name="about" handler={About} />
        <Route name="travel" handler={Travel} />
    </Route>
);

module.exports = Routes;
