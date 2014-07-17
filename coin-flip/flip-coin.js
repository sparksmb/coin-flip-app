/*global app */
app.usecase.flipCoin = {
	create: function (coin) {
		'use strict';
		var flipCoin;
		
		flipCoin = {
			sideUp: null,
			execute: function (halfRotaions) {
				return coin.flip(halfRotaions);
			}
		};
		
		return flipCoin;
	}
};