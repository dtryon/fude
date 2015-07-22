'use strict';

var React = require('react'),
    catalogue = require('../services/catalogue');


var BasketItem = React.createClass({displayName: 'BasketItem',

  render: function() {
    return (
      <li>
        <div>
          <span><img src={this.props.item.Image}/></span>
          <span>{this.props.item.Name}</span>
          <span><button onClick={this.props.removeItem}>X</button></span>
        </div>
        <div>
          <ItemQuantityControl itemIncremented={this.props.itemIncremented} itemDecremented={this.props.itemDecremented} quantity={this.props.quantity} />
          <span>{"£" + (this.props.price * this.props.quantity)}</span>
        </div>
      </li>
      );
  }
});

var Basket = React.createClass({displayName: 'Basket',
  
  itemIncremented: function(item) {
    this.props.itemIncremented(item.Id);
  },
  itemDecremented: function(item) {
    this.props.itemDecremented(item.Id);
  },
  removeItem: function(item) {
    this.props.removeItem(item.Id);
  },
  render: function() {
    function totalCount()
    {
      var total = 0;
      for (var prop in this.props.selectedItems) {
        if (this.props.selectedItems.hasOwnProperty(prop)) {
          total += this.props.selectedItems[prop];
        }
      }
      return total;
    }

    function getQuantity(item) {
      if (this.props.selectedItems.hasOwnProperty(item.Id)) {
        return this.props.selectedItems[item.Id];
      }
      return 0;
    }

    var basketSelectedItems = this.props.items.filter(function(i) { return i.Id in this.props.selectedItems; }.bind(this));

    var basketItems = basketSelectedItems.map(function(i) { return (<BasketItem itemIncremented={this.itemIncremented.bind(this, i)} 
                                                                                itemDecremented={this.itemDecremented.bind(this, i)} 
                                                                                removeItem={this.removeItem.bind(this, i)}
                                                                                item={i} 
                                                                                quantity={getQuantity.call(this, i)}
                                                                                price={i.Price} />); }.bind(this));

    return (
      <div className="basket">
          <div className="header">
            <span className="basketImage"></span>
            <span className="basketTitle">Basket</span>
            <span className="basketCount">{totalCount.call(this) + " items"}</span>
          </div>
          <ul className="basket-listing">
            {basketItems}
          </ul>
      </div>
    );
  }
});


var ItemImage = React.createClass({display: 'ItemImage',

  render: function() {
    return (<div className="item-detail-image"><img src={this.props.url}/></div>);
  }
});

var ItemDescription = React.createClass({displayName: 'ItemDescription',

  render: function() {
    return (
        <div className="item-description">
          <span className="item-name">{this.props.name}</span>
        </div>
      );
  }
});

var ItemQuantityControl = React.createClass({displayName: 'ItemQuantityControl',

  render: function() {

    return (
        <span>
            <button onClick={this.props.itemDecremented}>-</button>
            <input className="item-quantity" type="text" value={this.props.quantity} />
            <button onClick={this.props.itemIncremented}>+</button>
        </span>
      );
  }
});

var ItemShopperControl = React.createClass({displayName: 'ItemShopperControl',
  render: function() {
    return (
      <div>
        <div className="item-quantity-container">
          <div><span className="item-quantity-label">Quantity</span></div>
          <div><ItemQuantityControl itemIncremented={this.props.itemIncremented} itemDecremented={this.props.itemDecremented} quantity={this.props.quantity} /></div>
        </div>
        <div className="item-add-container">
          <button className="item-add" onClick={this.itemIncremented}>Add</button>
        </div>
      </div>
      );
  }
});

var ItemShopper = React.createClass({displayName: 'ItemShopper',
  render: function() {
    return (
      <div className="item-shopper">
        <div className="item-pricing">
          <span className="item-price">{"£" + this.props.pricing.price}</span>
          <span className="item-unit-price">{this.props.pricing.unitPrice + "/(" + this.props.pricing.unitType + ")"}</span>
        </div>
        <ItemShopperControl itemIncremented={this.props.itemIncremented} itemDecremented={this.props.itemDecremented} quantity={this.props.quantity} />
        <div><a href="#" onClick="">Save to shopping list</a></div>
        <div><a href="#" onClick="">Rest of shelf ></a></div>
      </div>);
  }
});

var CatalogueItem = React.createClass({displayName: 'CatalogueItem',
  itemIncremented: function() {
    this.props.itemIncremented(this.props.item);
  },
  itemDecremented: function() {
    this.props.itemDecremented(this.props.item);
  },
  render: function() {
    var pricing = { price: this.props.item.Price, unitPrice: this.props.item.UnitPrice, unitType: this.props.item.unitType };
    return (
        <div className="item">
          <div className="item-display">
            <ItemImage url={this.props.item.Image}/>
            <ItemDescription name={this.props.item.Name}/>
          </div>
          <ItemShopper itemIncremented={this.itemIncremented} itemDecremented={this.itemDecremented} pricing={pricing} quantity={this.props.quantity} />
        </div>
      );
  }
});

var CatalogueSort = React.createClass({displayName: 'CatalogueSort',

  render: function() {
    return (
      <div>Sort by: <select><option>Relevance</option><option>Price</option></select><button>Go ></button></div>
      );
  }
});

var Catalogue = React.createClass({displayName: 'Catalogue',
  itemIncremented: function(item) {
    this.props.itemIncremented(item.Id);
  },
  itemDecremented: function(item) {
    this.props.itemDecremented(item.Id);
  },
  render: function() {

    function getQuantity(item) {
      if (this.props.selectedItems.hasOwnProperty(item.Id)) {
        return this.props.selectedItems[item.Id];
      }
      return 0;
    }

    var items = this.props.items.map(function(i) { return (<CatalogueItem itemIncremented={this.itemIncremented} itemDecremented={this.itemDecremented} item={i} quantity={getQuantity.call(this, i)}/>); }.bind(this))
    return (
      <div className="catalogue">
        <CatalogueSort />
        <div>
            {items}
        </div>
      </div>
    );
  }
});


var Shopper = React.createClass({displayName: 'Shopper',
  getInitialState: function() {
    return {currentItems:{}};
  },
  itemIncremented: function(itemId) {
    var itemCount = this.state.currentItems[itemId];
    if (itemCount === undefined) { itemCount = 1; }
    else { itemCount += 1; }
    this.state.currentItems[itemId] = itemCount;
    this.setState({currentItems: this.state.currentItems});
  },
  itemDecremented: function(itemId) {
    var itemCount = this.state.currentItems[itemId];
    if (itemCount === undefined || itemCount <= 1) { 
      delete this.state.currentItems[itemId];
    }
    else if (itemCount > 1) { 
      itemCount -= 1; 
      this.state.currentItems[itemId] = itemCount;
    }
    this.setState({currentItems: this.state.currentItems});
  },
  removeItem: function(itemId) {
    delete this.state.currentItems[itemId];
    this.setState({currentItems: this.state.currentItems});
  },
  render: function() {
    var catalogueItems = catalogue.getProducts();
    return (
      <div className="main">
          <Catalogue 
            itemIncremented={this.itemIncremented} 
            itemDecremented={this.itemDecremented} 
            items={catalogueItems} 
            selectedItems={this.state.currentItems} />
          <Basket 
            itemIncremented={this.itemIncremented} 
            itemDecremented={this.itemDecremented}
            selectedItems={this.state.currentItems} 
            items={catalogueItems} 
            removeItem={this.removeItem} />
      </div>
    );
  }
});

module.exports = Shopper;