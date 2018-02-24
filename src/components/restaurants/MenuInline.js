import React from "react";

class MenuInline extends React.Component {
  render() {
    const menuContent = [];
    for (let i = 0; i < 6; i++) {
      menuContent.push(<span key={i}>{Object.keys(this.props.menu)[i]}</span>);
    }
    return (
      <div className="menuBlock sticky-top">
        <div className="container">
          <div className="menuContent">{menuContent}</div>
        </div>
      </div>
    );
  }
}

export default MenuInline;
