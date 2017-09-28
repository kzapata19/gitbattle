var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

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
      <div>
        Hello World!
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);