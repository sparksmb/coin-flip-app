/*global window, app, document */

/******************************************
Main's responsibility is to instantiate 
dependencies (as seen by the variable list)
and then set the application in motion by
executing the view-usecase module.  No
business rules or algorithms should be 
visibile in main.  They should all be 
encapsulated in their appropriate modules.
Main is envoked in the index.html file
when the script tag is parsed.  Everything
else after the execution of main is event 
driven.
******************************************/
app.main.run = function () {
	'use strict';
	var xhr = app.entity.xhr.create(),
		coinFlipView = app.view.coinFlipView.create(xhr),
		coin = app.entity.coin.create('view/heads.png', 'view/tails.png'),
		callHeadsOrTails = app.usecase.callHeadsOrTails.create(coin),
		flipCoin = app.usecase.flipCoin.create(coin),
		viewCoinFlip;
	
	viewCoinFlip = app.usecase.viewCoinFlip.create(
		callHeadsOrTails,
		flipCoin,
		coinFlipView
	);
	
	viewCoinFlip.execute();
};