// : init

'use strict';

var search = require( './search' ),
	fabricator = require( './fabricator' ),
	ripple = require( './ripple' );

( function( $ ) {

	search.init();
	fabricator.init();
	fabricator.buildColorChips();
	fabricator.setActiveItem();
	fabricator.fixSidebar();
	ripple.init( $ );

} )( jQuery );
