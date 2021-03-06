'use strict';

(function(module) {

    var data = {
        "Details": [
            {
                "Id": 32596,
                "Name": "Tesco Free Range Eggs Medium Box Of 6",
                "Description": "Tesco 6 Medium Free Range Eggs. These freshly laid Tesco free range eggs come from carefully selected British farms, that ensure high standards of both hen and environmental welfare. Our hens enjoy a cereal based vegetarian diet and are free to roam outdoors during the day. The Lion Quality mark guarantees that the eggs have been laid in the U.K. and produced to the highest standards of food safety. All Lion Quality eggs are date stamped for freshness. Our hens have been vaccinated against salmonella.",
                "Price": 1.00,
                "UnitPrice": 0.17,
                "unitType": "each",
                "BasketQty": 0,
                "IsFavourite": true,
                "Promotions": [
                    {
                        "Id": 31,
                        "Description": "Buy 1 get 1 free",
                        "Type": "Reward"
                    }
                ],
                "Image": "http://img.tesco.com/Groceries/pi/341/5018374888341/IDShot_110x110.jpg"
            },
             {
                "Id": 32597,
                "Name": "Tesco Free Range Eggs Medium Box Of 12",
                "Description": "Tesco 12 Medium Free Range Eggs. These freshly laid Tesco free range eggs come from carefully selected British farms, that ensure high standards of both hen and environmental welfare. Our hens enjoy a cereal based vegetarian diet and are free to roam outdoors during the day. The Lion Quality mark guarantees that the eggs have been laid in the U.K. and produced to the highest standards of food safety. All Lion Quality eggs are date stamped for freshness. Our hens have been vaccinated against salmonella.",
                "Price": 1.95,
                "UnitPrice": 0.16,
                "unitType": "each",
                "BasketQty": 0,
                "IsFavourite": true,
                "Promotions": [],
                "Image": "http://img.tesco.com/Groceries/pi/471/5051140150471/IDShot_110x110.jpg"
            },
            {
                "Id": 32598,
                "Name": "Tesco Everyday Value Eggs Minimum Weight Box Of 15 eggs",
                "Description": "Tesco 15 Medium Free Range Eggs. These freshly laid Tesco free range eggs come from carefully selected British farms, that ensure high standards of both hen and environmental welfare. Our hens enjoy a cereal based vegetarian diet and are free to roam outdoors during the day. The Lion Quality mark guarantees that the eggs have been laid in the U.K. and produced to the highest standards of food safety. All Lion Quality eggs are date stamped for freshness. Our hens have been vaccinated against salmonella.",
                "Price": 1.25,
                "UnitPrice": 0.08,
                "unitType": "each",
                "BasketQty": 0,
                "IsFavourite": false,
                "Promotions": [
                    {
                        "Id": 411,
                        "Description": "500 extra points",
                        "Type": "Ecoupon"
                    },
                    {
                        "Id": 311,
                        "Description": "Buy 1 get 1 free",
                        "Type": "Reward"
                    }
                ],
                "Image": "http://img.tesco.com/Groceries/pi/808/0000003036808/IDShot_110x110.jpg"
            },
            {
                "Id": 12598,
                "Name": "Tesco Free Range Eggs Large Box Of 12",
                "Description": "Tesco 12 Large Free Range Eggs. These freshly laid Tesco free range eggs come from carefully selected British farms, that ensure high standards of both hen and environmental welfare. Our hens enjoy a cereal based vegetarian diet and are free to roam outdoors during the day. The Lion Quality mark guarantees that the eggs have been laid in the U.K. and produced to the highest standards of food safety. All Lion Quality eggs are date stamped for freshness. Our hens have been vaccinated against salmonella.",
                "Price": 2.50,
                "UnitPrice": 0.21,
                "unitType": "each",
                "BasketQty": 0,
                "IsFavourite": false,
                "Promotions": [
                    {
                        "Id": 411,
                        "Description": "500 extra points",
                        "Type": "Ecoupon"
                    },
                    {
                        "Id": 311,
                        "Description": "Buy 1 get 1 free",
                        "Type": "Reward"
                    }
                ],
                "Image": "http://img.tesco.com/Groceries/pi/808/0000003036808/IDShot_110x110.jpg"
            },
            {
                "Id": 12599,
                "Name": "Tesco Free Range Eggs Large Box Of 6",
                "Description": "Tesco 6 Large Free Range Eggs. These freshly laid Tesco free range eggs come from carefully selected British farms, that ensure high standards of both hen and environmental welfare. Our hens enjoy a cereal based vegetarian diet and are free to roam outdoors during the day. The Lion Quality mark guarantees that the eggs have been laid in the U.K. and produced to the highest standards of food safety. All Lion Quality eggs are date stamped for freshness. Our hens have been vaccinated against salmonella.",
                "Price": 1.30,
                "UnitPrice": 0.22,
                "unitType": "each",
                "BasketQty": 1,
                "IsFavourite": false,
                "Promotions": [
                    {
                        "Id": 611,
                        "Description": "50% off",
                        "Type": "Reward"
                    },
                    {
                        "Id": 411,
                        "Description": "500 extra points",
                        "Type": "Ecoupon"
                    },
                    {
                        "Id": 311,
                        "Description": "Buy 1 get 1 free",
                        "Type": "Reward"
                    }
                ],
                "Image": "http://img.tesco.com/Groceries/pi/303/5018374888303/IDShot_110x110.jpg"
            },
            {
                "Id": 15598,
                "Name": "Big And Fresh Eggs Box Of 10",
                "Description": "Big And Fresh Eggs Box Of 10. These freshly laid Big and Fresh free range eggs come from carefully selected British farms, that ensure high standards of both hen and environmental welfare. Our hens enjoy a cereal based vegetarian diet and are free to roam outdoors during the day. The Lion Quality mark guarantees that the eggs have been laid in the U.K. and produced to the highest standards of food safety. All Lion Quality eggs are date stamped for freshness. Our hens have been vaccinated against salmonella.",
                "Price": 1.50,
                "UnitPrice": 0.15,
                "unitType": "each",
                "BasketQty": 0,
                "IsFavourite": true,
                "Promotions": [
                    {
                        "Id": 671,
                        "Description": "Only £1.50",
                        "Type": "Reward"
                    }
                ],
                "Image": "http://img.tesco.com/Groceries/pi/686/0000050326686/IDShot_110x110.jpg"
            } 
        ]
    }

    return module.exports = {
        getProducts: function() { return data.Details; }
    }

})(module);

