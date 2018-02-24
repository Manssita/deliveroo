import React from "react";

class Header extends React.Component {
  render() {
    const { info } = this.props;
    return (
      <div className="row bloc">
        <div className="container">
          <div className="row header">
            <div className="col-lg-8">
              <p>
                <span className="on">Home</span> / Le Pain Quotidien
              </p>
              <h1>{info.name}</h1>
              <p>{info.description}</p>
            </div>
            <div className="col-lg-4 visuel">
              <img src={info.picture} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
