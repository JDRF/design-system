// : init
'use strict';

( function() {

	//check for IE9 and lower, return if we are in IE9 or lower
	if ( navigator.appVersion.indexOf( 'MSIE 9.', 'MSIE 8.' ) !== -1 ) {

		jQuery( document ).ready( function() {
			var loaderBtn = $( document.querySelector( '.ds-btn-loading' ) );
			var	loaderSpinner = $( document.querySelector( '.ds-spinner' ) );

			loaderSpinner.remove();
			loaderBtn.text( 'Loading...' );
			loaderBtn.addClass( 'ds-btn-ie-fallback' );
		} );

		return;

	} else {

		jQuery( document ).ready( function() {
			var ripple = window.ripple( '.ds-btn', {
				debug: false, // Turn Ripple.js logging on/off
				on: 'mousedown', // The event to trigger a ripple effect

				opacity: 0.4, // The opacity of the ripple
				color: 'auto', // Set the background color.
				multi: false, // Allow multiple ripples per element

				duration: 0.5, // The duration of the ripple
				exclude: ['ds-no-ripple'], //Exclude ripple on this selector

				// Filter function for modifying the speed of the ripple
				rate: function( pxPerSecond ) {
					return pxPerSecond;
				},

				easing: 'linear' // The CSS3 easing function of the ripple
			} );

			ripple.init();

		} );
	}

} )();
