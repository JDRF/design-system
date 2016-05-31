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
		this.loop =	document.querySelectorAll( '.f-menu .ds-nav a' );

		this.input.addEventListener( 'change', this.watch.bind( this ), false );
		this.input.addEventListener( 'keyup', this.watch.bind( this ), false );
		this.input.addEventListener( 'keypress', this.submit.bind( this ), false );
	},

	watch: function() {
		var self = this;

		this.clean();

		if ( '' !== self.input.value ) {
			this.results.className = this.results.className.replace( ' ds-hide', '' );
			Object.keys( this.loop ).map( function( key ) {
				if ( new RegExp( self.input.value, 'i' ).test( self.loop[ key ].text ) ) {
					self.append( self.loop[ key ].cloneNode( true ) );
				}
			} );
		}

		if ( this.results.children.length === 0 ) {
			this.clean();
		}

	},

	/**
	 * Check which key was press. If `enter`, prevent the default action
	 *
	 * @param  {object} e    Base JavaScript event
	 * @return {object} this
	 */
	submit: function( e ) {
		var key = e.which || e.keyCode;

		if ( key === 13 ) {
			e.preventDefault();
		}

		return this;
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
		this.results.className = this.results.className.replace( ' ds-hide', '' );
		this.results.className += ' ds-hide';
		this.results.innerHTML = '';
		return this;
	}

};
