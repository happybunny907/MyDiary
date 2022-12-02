import React, { Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';

import Item from './Item';
import FilterGroup from './FilterGroup';
import SortGroup from './SortGroup';

import { itemInformation, filterGroupInformation, ogItemInformation, ogFilterGroupInformation,addCartitemInformation } from './data';
class App extends Component {
  constructor() {
    super()
    this.state = {
      itemInformation,
      filterGroupInformation,
      addCartitemInformation,
      filters: [],
      favorites: [],
      sortVal: ""
    }
  }

  // given the index of an item, updates this.state.favorites, this.itemInfo
  favoriteItem = (imgNum) => {
    let favorites = this.state.favorites;
    favorites[imgNum - 1] = !favorites[imgNum - 1];
    this.setState({ favorites, itemInformation: this.keepFavorites(this.state.itemInformation), addCartitemInformation:itemInformation});
    this.setState({ itemInformation: this.getFilteredItems(this.state.filters)});
  }

  // (name, type) can be ('Snacks','Dietary_Restrictions')
  filterItems = (name, type) => {

    let totalFilters = [];
    if (this.state.filters.some((f) => f.name == name)) {
      totalFilters = this.state.filters.filter((element) => { return element.name !== name });
    } else {
      totalFilters = [...this.state.filters, { name, type }];
    }
    
    this.setState({
      filters: totalFilters,
      itemInformation: this.getFilteredItems(totalFilters)
    }, ()=> {this.sortItems(this.state.sortVal)});
  }

  // data.js -> all items (?)
  // Updates item.Other to favorite or not 
  keepFavorites = (items) => {
    let favoritedItems = [];

    items.forEach(item => {
      if (this.state.favorites[item.imageNum - 1]) {
        item.Other = ['in my cart'];
      } else {
        item.Other = [];
      }
      favoritedItems.push(item);
    });

    return favoritedItems;
  }

  // this.state.filter -> filtered Item
  // loops thru all items, if it is filtered, put it in filteredItems
  getFilteredItems = filters => {

    // this.setState({filterGroupInformation: filterGroupInformation})
    if (filters.length == 0) {
      // this.setState({itemInformation: itemInformation});
      // this.sortItems(this.state.sortVal);
      return itemInformation; }


    let filteredItems = [];

    this.keepFavorites(itemInformation).forEach(item => {
      let containsAll = true;
      filters.forEach(filter => {
        if (!item[filter.type].includes(filter.name)) { containsAll = false; }
      });
      if (containsAll) {
        filteredItems.push(item);
      }
    });

    return filteredItems;
  }

  sortItems = (sortType) => {
    this.setState({ itemInformation: this.state.itemInformation.sort((item1, item2) => { return item1[sortType] - item2[sortType] }) });
  }

  generateFilterGroup = (info) => {
    return (<div><FilterGroup {...info} filters={this.state.filters} filterItems={this.filterItems} key={info.title} /> <br /> </div>);
  }

  refreshSortVal = (s) => {
    this.setState({sortVal:s});
  }

  render() {
    return (
    
      <div>
        
        <div className="Image-title">
          <img
            src={require('./assets/title-logo.png')}
            width="750" height="50" padding="100" class="center"
          />
        </div>
        <button onClick={() => {
            this.setState({
              itemInformation: ogItemInformation, filterGroupInformation: ogFilterGroupInformation, filters: [],
              favorites: [], addCartitemInformation: ogItemInformation
            });
          }}>Reset filters <br />(note: it is not required to work on aggregator, <br /> and aggregator stops working after reset) </button>
        <div className="Side-bar">
          <SortGroup sortItems={this.sortItems} refreshSortVal={this.refreshSortVal}/>
          <br />
          {this.state.filterGroupInformation.map((info) => (<div><FilterGroup {...info} filters={this.state.filters} filterItems={this.filterItems} key={info.title} /> <br /> </div>))}
          <h1 style={{ "marginLeft": "4rem", "marginBottom": "1rem", "color": "grey", "fontSize": ".8rem" }}>Total Price: </h1>
          <br />
          <br />
          <header style={{ "marginLeft": "-4rem","marginTop": "3rem", "fontSize": "3rem"}}> 
          ${(this.state.addCartitemInformation.filter(item => item.Other.includes('in my cart')).reduce((acc, item) => (acc + item.price), 0)).toFixed(2)} </header>
        </div>
        <div className="Main-grid">

          <div className="Item-grid">
            {this.state.itemInformation.map((item) => <Item {...item} favoriteItem={this.favoriteItem} key={item.imageNum} />)}

          </div>
        </div>

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

