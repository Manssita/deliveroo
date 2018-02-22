import React from 'react';

class MenuInline extends React.Component {
  render() {
    const menuContent = [];
    for (let i = 0; i < 6; i++){
      menuContent.push(<span>{Object.keys(this.props.menu)[i]}</span>)
    }
    return <div className="menuBlock">{menuContent}</div>;
  }
}

export default MenuInline;