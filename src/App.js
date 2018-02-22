import React, { Component } from 'react';
import './App.css';
import NavBar from './components/common/NavBar';
import Restaurant from './components/restaurants/Restaurant';
import data from "./data/deliveroo.json";
import _ from "lodash"

class App extends Component {
  state = {
    // shippingPrice: 2.5,
    // selectedMenus: [
    //   { title: "Brunch vegan", unitPrice: 24.5, quantity: 2, id: 1 }
    // ]
    shippingPrice: 2.5,
    selectedMenus: [],
  };


  onAddMenu = menu => {
    const newSelectedMenus = [];
    let index = _.findIndex(this.state.selectedMenus, ["id", menu.id]);
      console.log(index);
      if (index === -1) {
        menu.qty = 1;
        newSelectedMenus.push(menu);
      } else {
        
        let qty = this.state.selectedMenus[index].qty + 1;
        
      }
    for (let i = 0; i < this.state.selectedMenus.length; i++) {
      /* let index = _.findIndex(this.state.selectedMenus, ["id", menu.id]);
      console.log(index);
      if (index === -1) {
        menu.quantity = 1;
        newSelectedMenus.push(menu);
      } */
      /* if(!_.find(this.state.selectedMenus, ["id", menu.id])){
        menu.qty = 1;
      }
      else {
        menu.qty = this.state.selectedMenus[i].qty + 1;
      } */
      // if(!newSelectedMenus[i].quantity){
      //   newSelectedMenus[i].quantity = 1;
      // }
      // else {
      //   newSelectedMenus[i].quantity = newSelectedMenus[i].quantity + 1;
      // }
    }
    console.log("objet", newSelectedMenus)
    //newSelectedMenus.push(menu);

    this.setState({
      selectedMenus: newSelectedMenus
    });

    // this.setState({
    //   selectedMenus: [...this.state.selectedMenus, menu]
    // });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row"><NavBar key={"navbar"} /></div>
        <div className="row">
          <Restaurant 
            data = {data} 
            selectedMenus={this.state.selectedMenus}
            key={"restaurant"}
            onAddMenu={this.onAddMenu}
          />
        </div>
      </div>
    );
  }
}

export default App;
