(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// : init

'use strict';

var search = require( './search' );

( function() {

	search.init();

} )();

},{"./search":2}],2:[function(require,module,exports){
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

		if ( self.input.value !== '' ) {
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
		this.results.innerHTML = '';
		return this;
	}

};

},{}]},{},[1]);
