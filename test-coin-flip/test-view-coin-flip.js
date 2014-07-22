/*global app, module, test, strictEqual */
module('view-flip-coin.js');

test('viewflipCoin.create() - The factory create method should return an object with an execute method.', function () {
	'use strict';
	var viewCoinFlip = app.usecase.viewCoinFlip.create({}, {}, {});
	strictEqual(typeof viewCoinFlip.execute, 'function', 'create returned an object with an execute method');
});
