var React = require ('react');
var Popular = require ('./Popular');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
//state
//lifecycle event
//UI

class App extends React.Component {
  render() {
    /**
    return React.createElement(
      "div",
      null,
      "Hello World!"
    )
    **/
    return (
      <Router>
        <div className='container'>
          <Route path='/popular' component={Popular}>
        </div>
      </Router>
    );
  }
}

module.exports = App;
