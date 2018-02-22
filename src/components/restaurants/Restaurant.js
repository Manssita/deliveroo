import React from 'react';
import Header from '../common/Header';
import MenuInlineAndCart from './MenuInlineAndCart';
import Menu from './Menu';

class Restaurant extends React.Component {
  render() {
    const {data} = this.props
    return<div className="container">
            <Header info = {data.restaurant}/>
            <MenuInlineAndCart 
              list = {data.menu} 
              selectedMenus={this.props.selectedMenus}
            />
            <Menu 
              data = {data} 
              onAddMenu={this.props.onAddMenu} 
            />
          </div>
  }
}

export default Restaurant;