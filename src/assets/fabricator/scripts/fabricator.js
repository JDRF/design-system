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
			var self = this;

			/**
			 * Default options
			 * @type {Object}
			 */
			this.options = {
				menu: false,
				mq: '(min-width: 60em)'
			};

			// open menu by default if large screen
			this.options.menu = window.matchMedia(this.options.mq).matches;

			/**
			 * Feature detection
			 * @type {Object}
			 */
			this.test = {};

			// test for sessionStorage
			this.test.sessionStorage = (function () {
				var test = '_f';
				try {
					sessionStorage.setItem(test, test);
					sessionStorage.removeItem(test);
					return true;
				} catch(e) {
					return false;
				}
			}());

			// create storage object if it doesn't exist; store options
			if (this.test.sessionStorage) {
				sessionStorage.self = sessionStorage.self || JSON.stringify(self.options);
			}


			/**
			 * Cache DOM
			 * @type {Object}
			 */
			this.dom = {
				root: document.querySelector('html'),
				primaryMenu: document.querySelector('.f-menu'),
				menuItems: document.querySelectorAll('.f-menu li a'),
				menuToggle: document.querySelector('.f-menu-toggle')
			};

			/* pass dom selectors to functions */
			designsystem.setActiveItem( self.dom.menuItems );
			designsystem.menuToggle( self.dom.root, self.dom.menuToggle, self.dom.menuItems );

		} /* end initialize */

		/**
		 * Get current option values from session storage
		 * @return {Object}
		 */
		function getOptions(e) {
			console.log('getOptions function');
			//return (fabricator.test.sessionStorage) ? JSON.parse(sessionStorage.fabricator) : fabricator.options;
		}

		/**
		 * Build color chips
		 */
		function buildColorChips(e) {

			var chips = document.querySelectorAll('.f-color-chip'),
				color;

			for (var i = chips.length - 1; i >= 0; i--) {
				color = chips[i].querySelector('.f-color-chip__color').innerHTML;
				chips[i].style.borderTopColor = color;
				chips[i].style.borderBottomColor = color;
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
				var current = (window.location.pathname + window.location.hash).replace(/(^\/)([^#]+)?(#[\w\-\.]+)?$/ig, function (match, slash, file, hash) {
						hash = hash || '';
						file = file.replace( 'dist/', '' ).replace( 'design-system/', '' ) || '';
						// Currently, without a scrolling listener, there's no way to
						// change as we visit new 'hashes'. Better to leave at top
						// level link
						return './' + file; // + hash.split('.')[0];
					}) || 'index.html',
					href;

				// find the current section in the items array
				for (var i = menuItems.length - 1; i >= 0; i--) {

					var item = menuItems[i];
					// get item href without first slash
					href = item.getAttribute('href').replace(/^\//g, '');

					if ( href === current ) {
						addClass( item, 'current' );
					} else {
						removeClass( item, 'current' );
					}
				}
			}
		}

		/**
		 * Click handler to primary menu toggle
		 * @return {Object} fabricator
		 */
		function menuToggle( root, menuToggle, menuItems ) {

			// shortcut menu DOM
			var toggle = menuToggle;

			var options = getOptions();

			// toggle classes on ctrl + m press
			document.onkeydown = function (root) {
				e = e || event
				if (e.ctrlKey && e.keyCode == 'M'.charCodeAt(0)) {
					toggleClasses(root);
				}
			}

			// toggle classes on click
			toggle.addEventListener('click', function (root) {
				toggleClasses(root);
			});

			for (var i = 0; i < menuItems.length; i++) {
				menuItems[i].addEventListener('click', closeMenu);
			}

			// toggle classes on certain elements
			function toggleClasses ( root ) {
				//TODO: Replace ClassList!
				var menuClassList = root.className.split(' ');
				options.menu = !root.classList.contains('f-menu-active');
				root.classList.toggle('f-menu-active');

				if (fabricator.test.sessionStorage) {
					sessionStorage.setItem('fabricator', JSON.stringify(options));
				}
			}

			// close menu when clicking on item (for collapsed menu view)
			function closeMenu () {
				if (!window.matchMedia(fabricator.options.mq).matches) {
					toggleClasses();
				}
			}
		}

		/**
		 * Open/Close menu based on session var.
		 * Also attach a media query listener to close the menu when resizing to smaller screen.
		 */
		function setInitialMenuState(e) {

			// root element
			var root = document.querySelector('html');

			var mq = window.matchMedia(this.options.mq);

			// if small screen
			var mediaChangeHandler = function (list) {
				if (!list.matches) {
					removeClass( root, 'f-menu-active');
				} else {
					if (getOptions().menu) {
						addClass( root, 'f-menu-active');
					} else {
						removeClass( root, 'f-menu-active');
					}
				}
			};

			mq.addListener(mediaChangeHandler);
			mediaChangeHandler(mq);
		}

		/**
		 * Add fixed class to sidebar on scroll
		 */
		function fixSidebar(e) {
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

			window.onscroll = function(e) {
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
			menuToggle          : menuToggle,
			buildColorChips     : buildColorChips,
			setActiveItem       : setActiveItem,
			fixSidebar          : fixSidebar,
		};

	}();

	designsystem.initialize();
	designsystem.buildColorChips();
	designsystem.fixSidebar();

})();