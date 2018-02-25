import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/common/NavBar";
import Restaurant from "./components/restaurants/Restaurant";
import data from "./data/deliveroo.json";
import _ from "lodash";

class App extends Component {
  state = {
    // shippingPrice: 2.5,
    // selectedMenus: [
    //   { title: "Brunch vegan", unitPrice: 24.5, quantity: 2, id: 1 }
    // ]
    shippingPrice: 2.5,
    totalCart: 0,
    selectedMenus: []
  };

  // on ajoute des éléments dans notre panier
  onAddMenu = menu => {
    // on crée un index qui va nous donner la position de l'élément en question
    let index = _.findIndex(this.state.selectedMenus, ["id", menu.id]);
    // s'il n'existe pas :
    if (index === -1) {
      // on crée une copie de menu(qui vient du fichier json) qu el'on appelle newMenu
      let newMenu = { ...menu };
      // on lui ajoute une clé quantity qui a pour valeur 1
      newMenu.qty = 1;
      // on met à jour selectedMenus en pushant newMenu
      this.setState(
        {
          selectedMenus: [...this.state.selectedMenus, newMenu],
          totalCart: parseFloat(this.state.totalCart) + parseFloat(menu.price)
        },
        () => {}
      );
    } else {
      // s'il est présent on crée à nouveau une copie de selectedMenus
      let updatedMenus = [...this.state.selectedMenus];
      // on ajoute +1 à la quantité dans la copie grâce à la position de l'élement
      updatedMenus[index].qty++;
      // on met à jour selectedMenus grâce à la copie
      this.setState(
        {
          selectedMenus: updatedMenus,
          totalCart: parseFloat(this.state.totalCart) + parseFloat(menu.price)
        },
        () => {}
      );
    }
  };
  onSubMenu = menu => {
    let index = _.findIndex(this.state.selectedMenus, ["id", menu.id]);
    let updatedMenus = [];
    for (let i = 0; i < this.state.selectedMenus.length; i++) {
      updatedMenus.push({
        ...this.state.selectedMenus[i]
      });
    }
    if (updatedMenus[index].qty > 0) {
      updatedMenus[index].qty--;
      if (updatedMenus[index].qty >= 0) {
        if (updatedMenus[index].qty === 0) {
          updatedMenus.splice(index, 1);
        }
        this.setState(
          {
            selectedMenus: updatedMenus,
            totalCart: parseFloat(this.state.totalCart) - parseFloat(menu.price)
            // totalCart: this.state.totalCart - parseFloat(menu.price)
          },
          () => {}
        );
      }
    }
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row bloc">
          <NavBar key={"navbar"} totalCart={this.state.totalCart} />
        </div>
        <div>
          <Restaurant
            data={data}
            selectedMenus={this.state.selectedMenus}
            shippingPrice={this.state.shippingPrice}
            key={"restaurant"}
            onAddMenu={this.onAddMenu}
            onSubMenu={this.onSubMenu}
            totalCart={this.state.totalCart}
          />
        </div>
      </div>
    );
  }
}

export default App;
