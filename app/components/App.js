var React = require ('react');
var Popular = require ('./Popular');
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
      <div className='container'>
        <Popular />
      </div>
    );
  }
}

module.exports = App;
