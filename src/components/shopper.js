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

  render: function() {
    return (
      <div>
        <div>
          <div></div>
          <div>
            <button>-</button>
            <input type="text" value="0"/>
            <button>+</button>
          </div>
        </div>
        <div>
          <button>Add</button>
        </div>
      </div>
      );
  }
});

var ItemShopper = React.createClass({display: 'ItemShopper',

  render: function() {
    return (
      <div>
        <div className="item-pricing">
          <span className="item-price">{"£" + this.props.pricing.price}</span>
          <span clasName="item-unit-price">{this.props.pricing.unitPrice + "/(" + this.props.pricing.unitType + ")"}</span>
        </div>
        <ItemShopperControl />
        <div><a href="#" onClick="">Save to shopping list</a></div>
        <div><a href="#" onClick="">Rest of shelf ></a></div>
      </div>);
  }
});

var CatalogueItem = React.createClass({displayName: 'CatalogueItem',

  render: function() {
    var pricing = { price: this.props.item.Price, unitPrice: this.props.item.UnitPrice, unitType: this.props.item.unitType };
    return (
        <div className="item">
          <ItemImage url={this.props.item.Image}/>
          <ItemDescription name={this.props.item.Name}/>
          <ItemShopper pricing={pricing}/>
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
  render: function() {
    var items = this.props.items.map(function(i) { return (<CatalogueItem item={i}/>); })
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
    return {};
  },
  render: function() {
    return (
      <div className="main">
          <Catalogue items={catalogue.getProducts()} />
          <Basket />
      </div>
    );
  }
});

module.exports = Shopper;