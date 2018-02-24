import React from "react";
import Header from "../common/Header";
import MenuInlineAndCart from "./MenuInlineAndCart";
import Menu from "./Menu";

class Restaurant extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <Header info={data.restaurant} />
        <MenuInlineAndCart
          list={data.menu}
          selectedMenus={this.props.selectedMenus}
          shippingPrice={this.props.shippingPrice}
          onAddMenu={this.props.onAddMenu}
          onSubMenu={this.props.onSubMenu}
          totalCart={this.props.totalCart}
        />
        <Menu data={data} onAddMenu={this.props.onAddMenu} />
      </div>
    );
  }
}

export default Restaurant;
