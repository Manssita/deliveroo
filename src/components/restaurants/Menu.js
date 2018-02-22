import React from "react";
import MenuBlock from "./MenuBlock";

class Menu extends React.Component {
  render() {
    const menus = [];
    const keys = Object.keys(this.props.data.menu);
    for (let i = 0; i < keys.length; i++) {
      menus.push(
        <div key={i} className="row">
          <div className="col-lg-8">
            <div className="here">
              <h2>{keys[i]}</h2>
              <MenuBlock
                menus={this.props.data.menu[keys[i]]}
                onAddMenu={this.props.onAddMenu}
              />
            </div>
          </div>
        </div>
      );
    }
    // return {menus}
    return <div>{menus}</div>;
  }
}

export default Menu;
