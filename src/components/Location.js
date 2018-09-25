import React from 'react';

class Location extends React.Component {
  render(){
    return (
        <li className="location__list-item menu--settings sort-list-styles">
            {this.props.item.address}: {this.props.item.phone}
        </li>
    )
  }
}

export default Location;
