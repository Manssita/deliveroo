import React from 'react';

class Item extends React.Component {
  render() {
    return (
      <div className="row">
        {this.props.menus.map((menu, index) => {
          if(menu.picture){return (
            <div className="col-lg-6" key={index} onClick={() => this.props.onAddMenu(menu)}>
              <div className="row">
                <div className="col-lg-7">
                  <p>{menu.title}</p>
                  <p>{menu.price} €</p>
                </div>
                <div className="col-lg-5">
                  <img className="imgItem" src={menu.picture} alt={menu.title} />
                </div>
              </div>
            </div>
          );}
          else{return (
            <div className="col-lg-6" key={index} onClick={() => this.props.onAddMenu(menu)}>
              <div className="row">
                <div className="col-lg-10">
                  <p>{menu.title}</p>
                  <p>{menu.price} €</p>
                </div>
              </div>
            </div>
          );}
          
        })}
      </div>
    );
  }
    // const items = [];
    // for (let i = 0; i < this.props.item.length; i++){
    //   items.push(
    //   <div>
    //     <p>{this.props.item[i].price}</p>
    //     <p>{this.props.item[i].title}</p>
    //     <img className="imgItem" src={this.props.item[i].picture} alt={this.props.item[i].title} />
      
    //   </div>)
    // }
    // return <div>{items}</div>;
}

export default Item;