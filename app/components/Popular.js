var React = require('react');
var PropTypes = require('prop-types');

//refactored to use function over class since this SelectLanguage component only has a render method and no state. Remove 'this' since it's undefined within this component's scope.
//Stateless Functional Component:
function SelectLanguage(props) {
  var languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

  return (
      <ul className='languages'>
        {languages.map(function (lang) {
          return (
            <li
              style={lang === props.selectedLanguage ? {color: '#d0021b'} : null}
              onClick={props.onSelect.bind(null, lang)}
              key={lang}>
              {lang}
            </li>
          )
        })}
      </ul>
    )
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

class Popular extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedLanguage: 'All'
    }
    //line below ensures "this" context always refers to specific instance of Popular component
    this.updateLanguage = this.updateLanguage.bind(this);
  }
  updateLanguage(lang) {
    this.setState(function() {
      return {
       selectedLanguage: lang
      }
    });
  }
  render () {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
      </div>
    );
  }
}

module.exports = Popular;

