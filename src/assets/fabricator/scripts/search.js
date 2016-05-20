/**
 * Search Module
 *
 * @module fabricator/scripts/search
 */

'use strict';

module.exports = {

	init: function() {
		this.input = document.getElementById( 'search-input' );
		this.results = document.getElementById( 'search-results' );
		this.loop =	document.querySelectorAll( '.f-menu .nav a' );

		this.input.addEventListener( 'change', this.watch.bind( this ), false );
		this.input.addEventListener( 'keyup', this.watch.bind( this ), false );
	},

	watch: function() {
		var self = this;

		this.clean();

		if ( '' !== self.input.value ) {
			this.results.className = this.results.className.replace( ' hide', '' );
			Object.keys( this.loop ).map( function( key ) {
				if ( new RegExp( self.input.value, 'i' ).test( self.loop[ key ].text ) ) {
					self.append( self.loop[ key ].cloneNode( true ) );
				}
			} );
		}

	},

	/**
	 * Append the passed value to the results node
	 *
	 * @param  {object} value HTML object
	 * @return {object}       this
	 */
	append: function( value ) {
		this.results.appendChild( value );
		return this;
	},

	/**
	 * Clean out all children
	 * @return {object} this
	 */
	clean: function() {
		this.results.className = this.results.className.replace( ' hide', '' );
		this.results.className += ' hide';
		this.results.innerHTML = '';
		return this;
	}

};
