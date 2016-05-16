/**
 * Global `fabricator` object
 * @namespace
 */

var fabricator = window.fabricator = {};

'use strict';

require('./prism');

(function() {

	var designsystem = function() {

		function initialize() {
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
				toggleClasses( htmlEl );
			});

			for ( var i = 0; i < menuItems.length; i++ ) {
				menuItems[i].addEventListener( 'click', designsystem.closeMenu );
			}

			/* pass dom selectors to functions */
			designsystem.setActiveItem( menuItems );
			designsystem.setInitialMenuState();

		} /* end initialize */

		/**
		 * Build color chips
		 */
		function buildColorChips() {

			var chips = document.querySelectorAll( '.f-color-chip' ),
				color;

			for ( var i = chips.length - 1; i >= 0; i-- ) {
				color = chips[ i ].querySelector( '.f-color-chip__color' ).innerHTML;
				chips[ i ].style.borderTopColor = color;
				chips[ i ].style.borderBottomColor = color;
			}
		}

		/**
		 * Add `f-active` class to active menu item
		 */
		function setActiveItem( menuItems ) {

			window.addEventListener( 'hashchange', setActive );

			setActive( menuItems );

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
					}) || 'index.html',
					href;

				// find the current section in the items array
				for ( var i = menuItems.length - 1; i >= 0; i-- ) {

					var item = menuItems[ i ];
					// get item href without first slash
					href = item.getAttribute( 'href' ).replace(/^\//g, '');

					if ( href === current ) {
						addClass( item, 'current' );
					} else {
						removeClass( item, 'current' );
					}
				}
			}
		}

		/**
		 * Toggle f-menu-active class
		 *
		 */
		function toggleClasses ( htmlEl ) {
			//TODO: Replace ClassList!
			htmlEl.classList.toggle( 'f-menu-active' );
		}

		/**
		* Close menu when clicking on item (for collapsed menu view)
		*
		*/
		function closeMenu () {
			if ( !window.matchMedia( this.options.mq ).matches ) {
				toggleClasses();
			}
		}

		/**
		 * Open/Close menu based on session var.
		 * Also attach a media query listener to close the menu when resizing to smaller screen.
		 */
		function setInitialMenuState() {

			// root element
			var root = document.querySelector( 'html' );

			var mq = window.matchMedia( this.options.mq );

			// if small screen
			var mediaChangeHandler = function ( list ) {
				if ( !list.matches ) {
					removeClass( root, 'f-menu-active' );
				} else {
					addClass( root, 'f-menu-active' );
				}
			};

			mq.addListener( mediaChangeHandler );
			mediaChangeHandler( mq );
		}

		/**
		 * Add fixed class to sidebar on scroll
		 */
		function fixSidebar() {
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
					addClass( dsSidebar, 'fixed' );
				} else {
					removeClass( dsSidebar, 'fixed' );
				}
			};
		}

		/**
		 * Helper: Add Class to Element
		 */
		function addClass ( el, className ) {
			//Check if element is undefined or null first
			if ( 'undefined' === typeof el || null === el ) {
				return;
			}
			// So we don't have duplicates
			removeClass( el, className );
			el.className += ' ' + className;
		}

		/**
		 * Helper: Remove Class from Element
		 */
		function removeClass ( el, className ) {
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
		}

		return {
			initialize          : initialize,
			setInitialMenuState : setInitialMenuState,
			buildColorChips     : buildColorChips,
			setActiveItem       : setActiveItem,
			fixSidebar          : fixSidebar,
		};

	}();

	designsystem.initialize();
	designsystem.buildColorChips();
	designsystem.fixSidebar();

})();