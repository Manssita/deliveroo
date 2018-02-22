import React from 'react';

class Header extends React.Component {
  render() {
    const {info} = this.props
    return <div className="row">
            <div className="col-lg-8">
              <p>Home / Le Pain Quotidien</p>
              <h1>{info.name}</h1>
              <p>{info.description}</p>
            </div>
            <div className="col-lg-4 visuel">
              <img src={info.picture} alt="" />
            </div>
          </div>
  }
}

export default Header;