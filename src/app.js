(function () {
    'use strict';

    var buyItemsList = [{name: "Cookie", quantity: "10"}, {name: "Cake", quantity: "2"}, {name: "Soda", quantity: "5"},
        {name: "Tea", quantity: "3"}, {name: "Water", quantity: "8"}, {name: "Coffee", quantity: "10"}];

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// LIST Buy - controller
    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        var listBuy = this;

        listBuy.items = ShoppingListCheckOffService.getBuyItems();

        listBuy.itemName = "";
        listBuy.itemQuantity = "";

        listBuy.bougthItem = function (itemIndex) {
            ShoppingListCheckOffService.bougthItem(itemIndex);
        }
    }


// LIST Already - controller
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var listAlready = this;

        listAlready.items = ShoppingListCheckOffService.getAlreadyItems();

        listAlready.itemName = "";
        listAlready.itemQuantity = "";
    }


    function ShoppingListCheckOffService() {
        var service = this;
        
        var buyItems = buyItemsList;

        var alreadyItems = [];

        service.bougthItem = function (itemIndex) {
            alreadyItems.push(buyItems.at(itemIndex));
            buyItems.splice(itemIndex, 1);
        };

        service.getBuyItems = function () {
            return buyItems;
        };

        service.getAlreadyItems = function () {
            return alreadyItems;
        };
    }
})();
