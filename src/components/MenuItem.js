import React from 'react';

class MenuItem extends React.Component {
  render(){
    return (
        <li className="menu__list-item menu--settings">
          <figure><img src={this.props.item.imgurl} /></figure>
          <div>{this.props.item.foodname}: £{this.props.item.foodprice}</div>
        </li>
    )
  }
}

export default MenuItem;
