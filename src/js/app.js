// : init
'use strict';

require( './ripple' );

( function() {
	var ripple = window.ripple( '.ds-btn', {
		debug: false, // Turn Ripple.js logging on/off
		on: 'mousedown', // The event to trigger a ripple effect

		opacity: 0.4, // The opacity of the ripple
		color: 'auto', // Set the background color. If set to "auto", it will use the text color
		multi: false, // Allow multiple ripples per element

		duration: 0.5, // The duration of the ripple

		// Filter function for modifying the speed of the ripple
		rate: function( pxPerSecond ) {
			return pxPerSecond;
		},

		easing: 'linear' // The CSS3 easing function of the ripple
	} );

	ripple();

	console.log( 'hey' );
} )();
