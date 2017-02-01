(function (){
	'use strict';
	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
	var itemAdder = this;
	
	itemAdder.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();

	itemAdder.checkItemBougth = function (itemIndex){
		ShoppingListCheckOffService.removeBoughtItem(itemIndex);
	}
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
	
	var itemChecker = this;
	itemChecker.itemsBought = ShoppingListCheckOffService.getItemsBought();
}

function ShoppingListCheckOffService(){
	var service = this;

	var isNoItemsToBuyLeft = 0;

	var itemsToBuy = [
	{
		"name": "Chips",
		"quantity": "1 bag"
	},
	
	{
		"name": "Milk",
		"quantity": "2 bottles"
	},
	{
		"name": "Sugar",
		"quantity": "1 kilo"
	},
	{
		"name": "Apples",
		"quantity": "2 kilos"
	},
	{
		"name": "Mushrooms",
		"quantity": "2 kilos"
	},
	{
		"name": "Shickers",
		"quantity": "10 bars"
	}
	];

	var itemsBought = [];

	service.removeBoughtItem = function(itemIndex){

		var item = itemsToBuy[itemIndex];
		
		itemsToBuy.splice(itemIndex, 1);
		itemsBought.push(item);
	}

	service.getItemsToBuy = function(){
		return itemsToBuy;
	}

	service.getItemsBought = function(){
		return itemsBought;
	}
}

})();