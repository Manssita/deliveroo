import React from 'react';
import MenuInline from './MenuInline';
import Cart from './Cart';

class MenuInlineAndCart extends React.Component {
  render() {
    return [<MenuInline menu = {this.props.list} />,
            <Cart 
              selectedMenus={this.props.selectedMenus}
            />];
  }
}

export default MenuInlineAndCart;