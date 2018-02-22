import React from 'react';

class Title extends React.Component {
  render() {
    return <h2>{Object.keys(this.props.title)[0]}</h2>;
  }
}

export default Title;