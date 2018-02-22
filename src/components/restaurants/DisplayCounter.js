import React from "react";

class DisplayCounter extends React.Component {
  render() {
    return <p>{this.props.counter}</p>;
  }
}

export default DisplayCounter;
