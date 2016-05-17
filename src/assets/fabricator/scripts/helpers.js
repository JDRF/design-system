/**
 * Helpers Module
 *
 * @module fabricator/scripts/helpers
 */

'use strict';

module.exports = {
	/**
	 * Helper: Add Class to Element
	 */
	addClass: function ( el, className ) {
		//Check if element is undefined or null first
		if ( 'undefined' === typeof el || null === el ) {
			return;
		}
		// So we don't have duplicates
		removeClass( el, className );
		el.className += ' ' + className;

		return this;
	},

	/**
	 * Helper: Remove Class from Element
	 */
	removeClass: function ( el, className ) {
		//Check if element is undefined or null first
		if ( 'undefined' === typeof el || null === el ) {
			return;
		}

		//Go to end of index for existing classes and remove desired class
		if ( el.className.indexOf( ' ' + className ) > -1 ) {
			el.className = el.className.replace( ' ' + className , '' );
		} else if ( el.className.indexOf( className ) > -1 ) {
			el.className = el.className.replace( className , '' );
		}

		return this;
	}
};