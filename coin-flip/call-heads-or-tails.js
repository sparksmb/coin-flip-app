/*global app */
app.usecase.callHeadsOrTails = {
	create: function () {
		'use strict';
		var callHeadsOrTails;
		
		callHeadsOrTails = {
			HEADS: 'heads',
			TAILS: 'tails',
			sideCalled: null,
			execute: function (coinSide) {
				callHeadsOrTails.sideCalled = coinSide;
				return callHeadsOrTails.sideCalled;
			},
			wasHeadsCalled: function () {
				return callHeadsOrTails.sideCalled === callHeadsOrTails.HEADS;
			}
		};
		
		return callHeadsOrTails;
	}
};