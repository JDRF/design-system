// : init

'use strict';

var search = require( './search' ),
	fabricator = require( './fabricator' );

( function() {

	search.init();
	fabricator.init();
	fabricator.buildColorChips();
	fabricator.setActiveItem();
	fabricator.fixSidebar();

} )();
