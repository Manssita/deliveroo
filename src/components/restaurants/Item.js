import React from "react";
import LinesEllipsis from "react-lines-ellipsis";

class Item extends React.Component {
  render() {
    return (
      <div className="row" key={"row"}>
        {this.props.menus.map((menu, index) => {
          if (menu.picture) {
            return (
              <div className="col-lg-6" key={index}>
                <div className="container">
                  <div
                    className="col-lg-12"
                    key={index}
                    onClick={() => this.props.onAddMenu(menu)}
                  >
                    <div className="row">
                      <div className="col-lg-12 items">
                        <div className="row">
                          <div className="col-lg-8">
                            <p className="title">{menu.title}</p>
                            <LinesEllipsis
                              text={menu.description}
                              maxLine="3"
                              ellipsis="..."
                              trimRight
                              basedOn="letters"
                            />
                            <p>{menu.price} €</p>
                          </div>
                          <div className="col-lg-4">
                            <div className="visuelItem">
                              <img
                                className="imgItem"
                                src={
                                  menu.picture +
                                  "?width=96&height=96&auto=webp&format=jpg&fit=crop"
                                }
                                alt={menu.title}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div className="col-lg-6" key={index}>
                <div className="container">
                  <div
                    className="col-lg-12"
                    key={index}
                    onClick={() => this.props.onAddMenu(menu)}
                  >
                    <div className="row">
                      <div className="col-lg-12 items">
                        <p className="title">{menu.title}</p>
                        <LinesEllipsis
                          text={menu.description}
                          maxLine="3"
                          ellipsis="..."
                          trimRight
                          basedOn="letters"
                        />
                        <p>{menu.price} €</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  }
}
export default Item;
