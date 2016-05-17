// : init

'use strict';

var search = require( './search' ),
	prism = require('./prism' ),
	helpers = require( './helpers' ),
	fabricator = require( './fabricator' );

( function() {

	search.init();
	prism.init();
	helpers.init();
	fabricator.init();

} )();
