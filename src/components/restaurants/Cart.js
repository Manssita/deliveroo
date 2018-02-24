import React from "react";

class Cart extends React.Component {
  render() {
    console.log(this.props.totalCart);
    // let total = 0;
    // let subtotal = 0;
    // let arrTotal = [];
    // for (let i = 0; i < this.props.selectedMenus.length; i++) {
    //   if (this.props.selectedMenus[i]) {
    //     arrTotal.push(
    //       this.props.selectedMenus[i].price * this.props.selectedMenus[i].qty
    //     );
    //   }
    // }
    // for (let j = 0; j < arrTotal.length; j++) {
    //   if (arrTotal.length > 0) {
    //     total = total + parseFloat(arrTotal[j]);
    //   }
    // }
    // if (arrTotal.length > 0) {
    //   subtotal = total;
    //   if (subtotal === 0) {
    //     total = 0;
    //   } else {
    //     total = total + this.props.shippingPrice;
    //   }
    // }
    if (this.props.totalCart === 0) {
      return (
        <div className="cart sticky-top">
          <button type="button" className="btn btn-secondary buttonFirst">
            Valider mon panier
          </button>

          <div className="row">
            <div className="col-lg-8">
              <p>Votre panier est vide</p>
            </div>
            <div className="col-lg-4" />
          </div>
        </div>
      );
    } else {
      return (
        <div className="cart sticky-top">
          <button type="button" className="btn btn-secondary buttonFirstActive">
            Valider mon panier
          </button>
          {this.props.selectedMenus.map((menu, index) => {
            return (
              <div key={index} className="row cartItem">
                <div className="col-lg-3 quantity">
                  <span onClick={() => this.props.onSubMenu(menu)}>
                    <i class="far fa-minus-square on" />
                  </span>
                  <span>{menu.qty} </span>
                  <span onClick={() => this.props.onAddMenu(menu)}>
                    <i class="far fa-plus-square on" />
                  </span>
                </div>
                <div className="col-lg-6">{menu.title}</div>
                <div className="col-lg-3">
                  €{(menu.price * menu.qty).toFixed(2)}
                </div>
              </div>
            );
          })}
          <div className="row">
            <div className="col-lg-9">
              <p>Sous-total </p>
            </div>
            <div className="col-lg-3">
              <p>€{this.props.totalCart.toFixed(2)}</p>
            </div>
            <div className="col-lg-9">
              <p>Frais de port </p>
            </div>
            <div className="col-lg-3">
              <p>€{this.props.shippingPrice}</p>
            </div>
            <div className="col-lg-9">
              <p>Total </p>
            </div>
            <div className="col-lg-3">
              <p>
                €{(this.props.totalCart + this.props.shippingPrice).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Cart;
