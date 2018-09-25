import React from 'react';
import MenuItem from './MenuItem';
import Location from './Location';

const menuItems = [
  {
    id:1,
    foodname:"Sausages and Mash",
    foodprice: 8,
    imgurl: "https://media.giphy.com/media/eHmXmHs6XbIpG/giphy.gif"
  },
  {
    id:2,
    foodname:"Fish and Chips",
    foodprice: 7,
    imgurl: "https://media.giphy.com/media/HftWxnIySNoas/giphy.gif"

  },
  {
    id:3,
    foodname:"English Breakfast",
    foodprice: 9,
    imgurl: "https://media.giphy.com/media/26CaMgGYl6Mk8sOFG/giphy.gif"

  },
  {
    id:4,
    foodname:"Spam fritters",
    foodprice: 2,
    imgurl: "https://media.giphy.com/media/txgArne0uyLPq/giphy.gif"

  }
];

const caffLocations = [
  {
    id:1,
    address:"London",
    phone: "0208 9071267"
  },
  {
    id:2,
    address:"Newcastle",
    phone: "0191 2228888"
  },
  {
    id:3,
    address:"Brighton",
    phone: "01865 2224444"
  },
  {
    id:4,
    address:"Birmingham",
    phone: "0121 2228888"
  },
  {
    id:5,
    address:"Nottingham",
    phone: "0151 2228888"
  }
];

class App extends React.Component {
  render(){
    return (
      <main>
        <section className="menu">
        <h2 className="menu__title">On the menu</h2>
      <ul className="menu__list">
        {
          menuItems.map(item => {
            return <MenuItem
              key={item.id}
              item={
              {
                foodname: item.foodname,
                foodprice: item.foodprice,
                imgurl: item.imgurl
              }
            }
            />
          })
        }
      </ul>
      </section>
      <section className="location">
      <h2 className="location__title">Where are we?</h2>
      <ul className="location__list">
      {
          caffLocations.map(item => {
            return <Location 
              key={item.id} 
              item={
                  {
                    address: item.address, 
                    phone: item.phone
                  }
              }
            />
          })
        }        
      </ul>
      </section>
      </main>
    )
  }
}

export default App;
