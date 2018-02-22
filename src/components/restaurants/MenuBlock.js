import React from 'react';
import Item from './Item';

class MenuBlock extends React.Component {
  render() {
    return(
            <Item 
              menus = {this.props.menus}
              onAddMenu={this.props.onAddMenu}
            />
         )
            
  }
}

export default MenuBlock;