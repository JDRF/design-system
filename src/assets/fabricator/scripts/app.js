// : init

'use strict';

var search = require( './search' ),
	prism = require('./prism' ),
	helpers = require( './helpers' ),
	fabricator = require( './fabricator' );

( function() {

	search.init();
	helpers.addClass();
	helpers.removeClass();
	fabricator.init();
	fabricator.buildColorChips();
	fabricator.setActiveItem();
	fabricator.setInitialMenuState();
	fabricator.fixSidebar();

} )();
