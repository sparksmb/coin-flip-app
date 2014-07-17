/*global app, module, test, strictEqual */
module('flip-coin.js');

test('flipCoin.create() - The factory create method should return an object with an execute method.', function () {
	'use strict';
	var flipCoin = app.usecase.flipCoin.create();
	strictEqual(typeof flipCoin.execute, 'function', 'create returned an object with an execute method');
});

//test('flipCoin.execute(0) - Flipping the coin with 0 half rotations should be HEADS. The coin always starts on HEADS before being flipped. Zero indicates the coin was not actually flipped.', function () {
//	'use strict';
//	var flipCoin = app.usecase.flipCoin.create();
//	strictEqual(flipCoin.execute(2), flipCoin.HEADS, 'coin landed on HEADS');
//});
//
//test('flipCoin.execute(1) - Flipping the coin with 1 half rotation should land on TAILS', function () {
//	'use strict';
//	var flipCoin = app.usecase.flipCoin.create();
//	strictEqual(flipCoin.execute(1), flipCoin.TAILS, 'coin landed on tails');
//});
//
//test('flipCoin.execute(2) - Flipping the coin with 2 half rotation should land on HEADS', function () {
//	'use strict';
//	var flipCoin = app.usecase.flipCoin.create();
//	strictEqual(flipCoin.execute(2), flipCoin.HEADS, 'coin landed on HEADS');
//});
