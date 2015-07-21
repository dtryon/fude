'use strict';

var React = require('react'),
    catalogue = require('../services/catalogue');


var Basket = React.createClass({displayName: 'Basket',
  render: function() {
    return (
      <div className="basket">
          Basket
      </div>
    );
  }
});


var ItemImage = React.createClass({display: 'ItemImage',

  render: function() {
    return (<div><img src={this.props.url}/></div>);
  }
});

var ItemDescription = React.createClass({display: 'ItemDescription',

  render: function() {
    return (
        <div className="item-description">
          <span className="item-name">{this.props.name}</span>
        </div>
      );
  }
});

var ItemShopperControl = React.createClass({display: 'ItemShopperControl',

  itemIncremented: function() {
    this.props.itemIncremented();
  },
  itemDecremented: function() {
    this.props.itemDecremented();
  },
  render: function() {
    return (
      <div>
        <div>
          <div>Quantity</div>
          <div>
            <button onClick={this.itemDecremented}>-</button>
            <input type="text" value="0"/>
            <button onClick={this.itemIncremented}>+</button>
          </div>
        </div>
        <div>
          <button onClick={this.itemIncremented}>Add</button>
        </div>
      </div>
      );
  }
});

var ItemShopper = React.createClass({display: 'ItemShopper',
  itemIncremented: function() {
    this.props.itemIncremented();
  },
  itemDecremented: function() {
    this.props.itemDecremented();
  },
  render: function() {
    return (
      <div>
        <div className="item-pricing">
          <span className="item-price">{"£" + this.props.pricing.price}</span>
          <span clasName="item-unit-price">{this.props.pricing.unitPrice + "/(" + this.props.pricing.unitType + ")"}</span>
        </div>
        <ItemShopperControl itemIncremented={this.itemIncremented} itemDecremented={this.itemDecremented} />
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
          <ItemImage url={this.props.item.Image}/>
          <ItemDescription name={this.props.item.Name}/>
          <ItemShopper itemIncremented={this.itemIncremented} itemDecremented={this.itemDecremented} pricing={pricing}/>
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
    var items = this.props.items.map(function(i) { return (<CatalogueItem itemIncremented={this.itemIncremented} itemDecremented={this.itemDecremented} item={i}/>); }.bind(this))
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
    console.log(this.state);
  },
  itemDecremented: function(itemId) {
    var itemCount = this.state.currentItems[itemId];
    if (itemCount === undefined) { itemCount = 0; }
    else if (itemCount > 0) { itemCount -= 1; }
    this.state.currentItems[itemId] = itemCount;
    this.setState({currentItems: this.state.currentItems});
    console.log(this.state);
  },
  render: function() {
    return (
      <div className="main">
          <Catalogue itemIncremented={this.itemIncremented} itemDecremented={this.itemDecremented} items={catalogue.getProducts()} />
          <Basket />
      </div>
    );
  }
});

module.exports = Shopper;