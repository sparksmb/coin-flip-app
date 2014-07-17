/*global app, module, test, strictEqual, ok */
module('coin.js');

test('coin.create() - should return an object', function () {
	'use strict';
	var coin = app.entity.coin.create();
	strictEqual(typeof coin, 'object', 'coin.create() returned an object');
});

test('coin.create() with out image parameters should result in a object where heads and tails image urls are null', function () {
	'use strict';
	var coin = app.entity.coin.create();
	strictEqual(coin.headsImageUrl, null, 'coin.headsImageUrl is null');
	strictEqual(coin.tailsImageUrl, null, 'coin.tailsImageUrl is null');
});

test('coin.create(headsImgUrl, tailsImgUrl) with image parameters should result in a object where heads and tails image urls have a string value', function () {
	'use strict';
	var coin = app.entity.coin.create('heads.png', 'tails.png');

	strictEqual(typeof coin.headsImageUrl, 'string', 'coin.headsImageUrl is a string');
	strictEqual(coin.headsImageUrl, 'heads.png', 'coin.headsImageUrl has the correct value');
	
	strictEqual(typeof coin.tailsImageUrl, 'string', 'coin.tailsImageUrl is a string');
	strictEqual(coin.tailsImageUrl, 'tails.png', 'coin.tailsImageUrl has the correct value');
});

test('coin.HEADS - should be a number and equal to 0', function () {
	'use strict';
	var coin = app.entity.coin.create();
	strictEqual(typeof coin.HEADS, 'number', 'coin.HEADS is a number');
	strictEqual(coin.HEADS, 0, 'The value of coin.HEADS is 0');
});

test('coin.TAILS - should be a number and equal to 1', function () {
	'use strict';
	var coin = app.entity.coin.create();
	strictEqual(typeof coin.TAILS, 'number', 'coin.TAILS is a number');
	strictEqual(coin.TAILS, 1, 'The value of coin.TAILS is 1');
});

test('coin.flip(0) - Flipping the coin with 0 half rotations should be HEADS. The coin always starts on HEADS before being flipped. Zero indicates the coin was not actually flipped.', function () {
	'use strict';
	var coin = app.entity.coin.create();
	strictEqual(coin.flip(0), coin.HEADS, 'coin is still on HEADS');
});

test('coin.flip(1) - Flipping the coin with 1 half rotation should land on TAILS', function () {
	'use strict';
	var coin = app.entity.coin.create();
	strictEqual(coin.flip(1), coin.TAILS, 'coin landed on tails');
});

test('coin.flip(2) - Flipping the coin with 2 half rotation should land on HEADS', function () {
	'use strict';
	var coin = app.entity.coin.create();
	strictEqual(coin.flip(2), coin.HEADS, 'coin landed on HEADS');
});

test('coin.flip(1001) - Flipping the coin with 1001 half rotation should land on TAILS', function () {
	'use strict';
	var coin = app.entity.coin.create();
	strictEqual(coin.flip(1001), coin.TAILS, 'coin landed on tails');
});

test('coin.flip(2002) - Flipping the coin with 2002 half rotation should land on HEADS', function () {
	'use strict';
	var coin = app.entity.coin.create();
	strictEqual(coin.flip(2002), coin.HEADS, 'coin landed on HEADS');
});
