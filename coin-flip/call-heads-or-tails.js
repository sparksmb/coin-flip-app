/*global app */
app.usecase.callHeadsOrTails = {
	create: function (coin) {
		'use strict';
		var callHeadsOrTails;
		
		callHeadsOrTails = {
			coin: coin,
			sideCalled: null,
			execute: function (sideCalled) {
				callHeadsOrTails.sideCalled = sideCalled;
				return callHeadsOrTails.sideCalled;
			},
			wasHeadsCalled: function () {
				return callHeadsOrTails.sideCalled === coin.HEADS;
			}
		};
		
		return callHeadsOrTails;
	}
};