/*global app, module, test, strictEqual */
module('call-heads-or-tails.js');

test('callHeadsOrTails.create(coin) - The factory create method should return an object with an execute method.', function () {
	'use strict';
	var coin = app.entity.coin.create(),
		callHeadsOrTails = app.usecase.callHeadsOrTails.create(coin);
	strictEqual(typeof callHeadsOrTails.execute, 'function', 'create returned an object with an execute method');
});

test('callHeadsOrTails.execute(sideCalled)', function () {
	'use strict';
	var coin = app.entity.coin.create(),
		callHeadsOrTails = app.usecase.callHeadsOrTails.create(coin);
	strictEqual(callHeadsOrTails.execute(coin.HEADS), coin.HEADS, 'call heads');
	strictEqual(callHeadsOrTails.sideCalled, coin.HEADS, 'heads was called');
	
	strictEqual(callHeadsOrTails.execute(coin.TAILS), coin.TAILS, 'call tails');
	strictEqual(callHeadsOrTails.sideCalled, coin.TAILS, 'tails was called');
});

test('callHeadsOrTails.wasHeadsCalled()', function () {
	'use strict';
	var coin = app.entity.coin.create(),
		callHeadsOrTails = app.usecase.callHeadsOrTails.create(coin);
	callHeadsOrTails.execute(coin.HEADS);
	strictEqual(callHeadsOrTails.wasHeadsCalled(), true, 'wasHeadsCalled should return true when heads was called');
	callHeadsOrTails.execute(coin.TAILS);
	strictEqual(callHeadsOrTails.wasHeadsCalled(), false, 'wasHeadsCalled should return false when tails was called');
});
