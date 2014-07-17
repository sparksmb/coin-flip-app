/*global app, module, test, strictEqual */
module('flip-coin.js');

test('flipCoin.create() - The factory create method should return an object with an execute method.', function () {
	'use strict';
	var coin = app.entity.coin.create(),
		flipCoin = app.usecase.flipCoin.create(coin);
	strictEqual(typeof flipCoin.execute, 'function', 'create returned an object with an execute method');
});

test('flipCoin.execute(1) - Flipping the coin with 1 half rotation should land on TAILS', function () {
	'use strict';
	var coin = app.entity.coin.create(),
		flipCoin = app.usecase.flipCoin.create(coin);
	flipCoin.sideUp = flipCoin.execute(1);
	strictEqual(flipCoin.sideUp, coin.TAILS, 'coin landed on tails');
});

test('flipCoin.execute(2) - Flipping the coin with 2 half rotation should land on HEADS', function () {
	'use strict';
	var coin = app.entity.coin.create(),
		flipCoin = app.usecase.flipCoin.create(coin);
	flipCoin.sideUp = flipCoin.execute(2);
	strictEqual(flipCoin.sideUp, coin.HEADS, 'coin landed on HEADS');
});
