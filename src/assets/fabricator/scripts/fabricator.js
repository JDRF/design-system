/**
 * Fabricator Module
 *
 * @module fabricator/scripts/fabricator
 */

'use strict';

var prism = require('./prism' ),
	helpers = require( './helpers' );

module.exports = {

	init: function() {
		/**
		 * Cache DOM
		 * @type {Object}
		 */
		this.dom = {
			root: document.querySelector( 'html' ),
			primaryMenu: document.querySelector( '.f-menu' ),
			menuItems: document.querySelectorAll( '.f-menu li a' ),
			menuToggle: document.querySelector( '.f-menu-toggle' )
		};

		/**
		 * Set cached DOM as variables and set this to self
		 */
		var self = this,
			toggle = this.dom.menuToggle,
			htmlEl = this.dom.root,
			menuItems = this.dom.menuItems;

		/**
		 * Default options
		 * @type {Object}
		 */
		this.options = {
			menu: false,
			mq: '(min-width: 60em)'
		};

		// open menu by default if large screen
		this.options.menu = window.matchMedia( this.options.mq ).matches;

		// toggle classes on click
		toggle.addEventListener('click', function () {
			self.toggleClasses( htmlEl );
		});

		// close menu when clicking menu items
		for ( var i = 0; i < menuItems.length; i++ ) {
			menuItems[i].addEventListener( 'click', this.closeMenu );
		}

		// pass dom selectors to functions
		this.setActiveItem( menuItems );
		this.setInitialMenuState();

		return this;

	}, /* end initialize */

	/**
	 * Build color chips
	 * @return {Object}
	 */
	buildColorChips: function() {

		var chips = document.querySelectorAll( '.f-color-chip' ),
			color;

		for ( var i = chips.length - 1; i >= 0; i-- ) {
			color = chips[ i ].querySelector( '.f-color-chip__color' ).innerHTML;
			chips[ i ].style.borderTopColor = color;
			chips[ i ].style.borderBottomColor = color;
		}

		return this;
	},

	/**
	 * Add `f-active` class to active menu item
	 * @return {Object}
	 */
	setActiveItem: function( menuItems ) {

		window.addEventListener( 'hashchange', setActive );

		if ( 'undefined' !== typeof menuItems ) {
			setActive( menuItems );
		}

		/**
		 * Match the window location with the menu item, set menu item as active
		 */
		function setActive( menuItems ) {

			// get current file and hash without first slash
			var current = (window.location.pathname + window.location.hash).replace(/(^\/)([^#]+)?(#[\w\-\.]+)?$/ig, function ( match, slash, file, hash ) {
				hash = hash || '';
				file = file.replace( 'dist/', '' ).replace( 'design-system/', '' ) || '';
				// Currently, without a scrolling listener, there's no way to
				// change as we visit new 'hashes'. Better to leave at top
				// level link
				return './' + file; // + hash.split('.')[0];
			}) || 'index.html', href;

			// find the current section in the items array
			for ( var i = menuItems.length - 1; i >= 0; i-- ) {

				var item = menuItems[ i ];
				// get item href without first slash
				href = item.getAttribute( 'href' ).replace(/^\//g, '');

				if ( href === current ) {
					helpers.addClass( item, 'current' );
				} else {
					helpers.removeClass( item, 'current' );
				}
			}
		}

		return this;
	},

	/**
	 * Toggle f-menu-active class
	 */
	toggleClasses: function( htmlEl ) {
		if( ! helpers.hasClass( htmlEl, 'f-menu-active' ) ){
			//if it does not have class, add it
			helpers.addClass( htmlEl, 'f-menu-active');
		} else {
			//if it does have class, then remove it
			helpers.removeClass( htmlEl, 'f-menu-active');
		}
	},

	/**
	* Close menu when clicking on item (for collapsed menu view)
	*/
	closeMenu: function () {
		if ( !window.matchMedia( this.options.mq ).matches ) {
			this.toggleClasses();
		}
	},

	/**
	 * Open/Close menu based on session var.
	 * Also attach a media query listener to close the menu when resizing to smaller screen.
	 * @return {Object}
	 */
	setInitialMenuState: function() {

		// root element
		var root = document.querySelector( 'html' );

		var mq = window.matchMedia( this.options.mq );

		// if small screen
		var mediaChangeHandler = function ( list ) {
			if ( !list.matches ) {
				helpers.removeClass( root, 'f-menu-active' );
			} else {
				helpers.addClass( root, 'f-menu-active' );
			}
		};

		mq.addListener( mediaChangeHandler );
		mediaChangeHandler( mq );

		return this;
	},

	/**
	 * Add fixed class to sidebar on scroll
	 * @return {Object}
	 */
	fixSidebar: function() {
		var dsHeaderTop  = document.querySelector( '.f-header-top' ),
			dsHeader  = document.querySelector( '.f-header' ),
			dsSidebar = document.querySelector( '.f-menu' ),
			headerTopHeight = dsHeaderTop.offsetHeight,
			headerHeight = dsHeader.offsetHeight,
			totalHeaderHeight = headerTopHeight + headerHeight;


		if ( 'undefined' === typeof dsHeaderTop || null === dsHeaderTop ) {
			return;
		}

		if ( 'undefined' === typeof dsHeader || null === dsHeader ) {
			return;
		}

		if ( 'undefined' === typeof dsSidebar || null === dsSidebar ) {
			return;
		}

		window.onscroll = function() {
			var topOffset = window.pageYOffset;

			if ( window.pageYOffset > totalHeaderHeight ) {
				helpers.addClass( dsSidebar, 'fixed' );
			} else {
				helpers.removeClass( dsSidebar, 'fixed' );
			}
		};

		return this;
	}
};


