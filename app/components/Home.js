var React = require('react');
//Link will enable transition from initial Battle view with Battle button to battle view
var Link = require('react-router-dom').Link;

class Home extends React.Component {
  render () {
    return (
      <div className='home-container'>
        <h1>Github Battle: Battle your friends</h1>
        <Link className='button' to='/battle'>
          Battle
        </Link>
      </div>
    );
  }
}

module.exports = Home;
