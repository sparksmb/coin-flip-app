/*global app */
app.entity.coin = {
	create: function (headsImageUrl, tailsImageUrl) {
		'use strict';
		var coin;
				
		coin = {
			HEADS: 0,
			TAILS: 1,
			headsImageUrl: headsImageUrl || null,
			tailsImageUrl: tailsImageUrl || null,
			flip: function (halfRotations) {
				return halfRotations % 2;
			}
		};
		
		return coin;
	}
};