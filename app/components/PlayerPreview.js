var React = require('react');
var PropTypes = require('prop-types');

//stateless functional component
function PlayerPreview(props) {
  return (
    <div>
      <div className='column'>
        <img
          className='avatar'
          src={props.avatar}
          alt={'Avatar for ' + props.username} />
        <h2 className='username'>@{props.username}</h2>
      </div>
      <div>
        {props.children}
      </div>
    </div>
  );
}

PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}

module.exports = PlayerPreview;