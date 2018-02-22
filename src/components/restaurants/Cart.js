import React from 'react';

class Cart extends React.Component {
  render() {
    return <div className="cart">
            <button type="button" className="btn btn-secondary buttonFirst">Valider mon panier</button>
              {this.props.selectedMenus.map((menu, index) => {
                return <div className="row">
                          <div className="col-lg-6" key={index}>{menu.title}</div>
                          <div className="col-lg-3" key={index}>{menu.price}</div>
                        </div>    
                ;
              })}
            <div className="row">
              <div className="col-lg-8"><p>Total</p></div>
              <div className="col-lg-4"></div>
            </div>
          </div>;
  
  }
}

export default Cart;