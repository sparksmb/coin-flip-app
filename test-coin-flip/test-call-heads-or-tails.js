/*global app, module, test, strictEqual */
module('test-call-heads-or-tails.js');

test('callHeadsOrTails.create() - The factory create method should return an object with an execute method.', function () {
	'use strict';
	var callHeadsOrTails = app.usecase.callHeadsOrTails.create();
	strictEqual(typeof callHeadsOrTails.execute, 'function', 'create returned an object with an execute method');
});

test('callHeadsOrTails.HEADS', function () {
	'use strict';
	var callHeadsOrTails = app.usecase.callHeadsOrTails.create();
	strictEqual(callHeadsOrTails.HEADS, 'heads', 'the object has a HEADS property');
});

test('callHeadsOrTails.TAILS', function () {
	'use strict';
	var callHeadsOrTails = app.usecase.callHeadsOrTails.create();
	strictEqual(callHeadsOrTails.TAILS, 'tails', 'the object has a TAILS property');
});

test('callHeadsOrTails.execute(side)', function () {
	'use strict';
	var callHeadsOrTails = app.usecase.callHeadsOrTails.create();
	strictEqual(callHeadsOrTails.execute(callHeadsOrTails.HEADS), callHeadsOrTails.HEADS, 'call heads');
	strictEqual(callHeadsOrTails.execute(callHeadsOrTails.TAILS), callHeadsOrTails.TAILS, 'call tails');
	
});

test('callHeadsOrTails.wasHeadsCalled()', function () {
	'use strict';
	var callHeadsOrTails = app.usecase.callHeadsOrTails.create();
	callHeadsOrTails.execute(callHeadsOrTails.HEADS);
	strictEqual(callHeadsOrTails.wasHeadsCalled(), true, 'wasHeadsCalled should return true when heads was called');
	callHeadsOrTails.execute(callHeadsOrTails.TAILS);
	strictEqual(callHeadsOrTails.wasHeadsCalled(), false, 'wasHeadsCalled should return false when tails was called');
});
