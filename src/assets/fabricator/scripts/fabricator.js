'use strict';

require('./prism');

/**
 * Global `fabricator` object
 * @namespace
 */
var fabricator = window.fabricator = {};


/**
 * Default options
 * @type {Object}
 */
fabricator.options = {
	menu: false,
	mq: '(min-width: 60em)'
};

// open menu by default if large screen
fabricator.options.menu = window.matchMedia(fabricator.options.mq).matches;

/**
 * Feature detection
 * @type {Object}
 */
fabricator.test = {};

// test for sessionStorage
fabricator.test.sessionStorage = (function () {
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
if (fabricator.test.sessionStorage) {
	sessionStorage.fabricator = sessionStorage.fabricator || JSON.stringify(fabricator.options);
}


/**
 * Cache DOM
 * @type {Object}
 */
fabricator.dom = {
	root: document.querySelector('html'),
	primaryMenu: document.querySelector('.f-menu'),
	menuItems: document.querySelectorAll('.f-menu li a'),
	menuToggle: document.querySelector('.f-menu-toggle')
};


/**
 * Get current option values from session storage
 * @return {Object}
 */
fabricator.getOptions = function () {
	return (fabricator.test.sessionStorage) ? JSON.parse(sessionStorage.fabricator) : fabricator.options;
};


/**
 * Build color chips
 */
fabricator.buildColorChips = function () {

	var chips = document.querySelectorAll('.f-color-chip'),
		color;

	for (var i = chips.length - 1; i >= 0; i--) {
		color = chips[i].querySelector('.f-color-chip__color').innerHTML;
		chips[i].style.borderTopColor = color;
		chips[i].style.borderBottomColor = color;
	}

	return this;

};


/**
 * Add `f-active` class to active menu item
 */
fabricator.setActiveItem = function () {

	/**
	 * Match the window location with the menu item, set menu item as active
	 */
	var setActive = function () {

		// get current file and hash without first slash
		var current = (window.location.pathname + window.location.hash).replace(/(^\/)([^#]+)?(#[\w\-\.]+)?$/ig, function (match, slash, file, hash) {
		    	hash = hash || '';
		    	file = file || '';
		    	return file + hash.split('.')[0];
			}) || 'index.html',
			href;

		// find the current section in the items array
		for (var i = fabricator.dom.menuItems.length - 1; i >= 0; i--) {

			var item = fabricator.dom.menuItems[i];

			// get item href without first slash
			href = item.getAttribute('href').replace(/^\//g, '');

			/**
			 * Not working!!!
			 * href is not identical to current
			 * regex needs to be edited to account for github url/localhost
			 */
			if ( href === current ) {
				fabricator.addClass( item, 'f-active');
			} else {
				fabricator.removeClass( item, 'f-active');
			}

		}

	};

	window.addEventListener('hashchange', setActive);

	setActive();

	return this;

};


/**
 * Click handler to primary menu toggle
 * @return {Object} fabricator
 */
fabricator.menuToggle = function () {

	// shortcut menu DOM
	var toggle = fabricator.dom.menuToggle;

	var options = fabricator.getOptions();

	// toggle classes on certain elements
	var toggleClasses = function () {
		//TODO: Replace ClassList!
		var menuClassList = fabricator.dom.root.className.split(' ');
		options.menu = !fabricator.dom.root.classList.contains('f-menu-active');
		fabricator.dom.root.classList.toggle('f-menu-active');

		if (fabricator.test.sessionStorage) {
			sessionStorage.setItem('fabricator', JSON.stringify(options));
		}
	};

	// toggle classes on ctrl + m press
	document.onkeydown = function (e) {
		e = e || event
		if (e.ctrlKey && e.keyCode == 'M'.charCodeAt(0)) {
			toggleClasses();
		}
	}

	// toggle classes on click
	toggle.addEventListener('click', function () {
		toggleClasses();
	});

	// close menu when clicking on item (for collapsed menu view)
	var closeMenu = function () {
		if (!window.matchMedia(fabricator.options.mq).matches) {
			toggleClasses();
		}
	};

	for (var i = 0; i < fabricator.dom.menuItems.length; i++) {
		fabricator.dom.menuItems[i].addEventListener('click', closeMenu);
	}

	return this;

};

/**
 * Automatically select code when code block is clicked
 */
fabricator.bindCodeAutoSelect = function () {

	var codeBlocks = document.querySelectorAll('.f-item-code');

	var select = function (block) {
		var selection = window.getSelection();
		var range = document.createRange();
		range.selectNodeContents(block.querySelector('code'));
		selection.removeAllRanges();
		selection.addRange(range);
	};

	for (var i = codeBlocks.length - 1; i >= 0; i--) {
		codeBlocks[i].addEventListener('click', select.bind(this, codeBlocks[i]));
	}

};


/**
 * Open/Close menu based on session var.
 * Also attach a media query listener to close the menu when resizing to smaller screen.
 */
fabricator.setInitialMenuState = function () {

	// root element
	var root = document.querySelector('html');

	var mq = window.matchMedia(fabricator.options.mq);

	// if small screen
	var mediaChangeHandler = function (list) {
		if (!list.matches) {
			fabricator.removeClass( root, 'f-menu-active');
		} else {
			if (fabricator.getOptions().menu) {
				fabricator.addClass( root, 'f-menu-active');
			} else {
				fabricator.removeClass( root, 'f-menu-active');
			}
		}
	};

	mq.addListener(mediaChangeHandler);
	mediaChangeHandler(mq);

	return this;

};

/**
 * Helper: Add Class to Element
 */
fabricator.addClass = function ( el, className ) {
	//Check if element is undefined or null first
	if ( 'undefined' === typeof el || null === el ) {
		return;
	}
	// So we don't have duplicates
	fabricator.removeClass( el, className );
	el.className += ' ' + className;
};

/**
 * Helper: Remove Class from Element
 */
fabricator.removeClass = function ( el, className ) {
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
};

/**
 * Initialization
 */
(function () {

	// invoke
	fabricator
		.setInitialMenuState()
		.menuToggle()
		.buildColorChips()
		.setActiveItem()
		.bindCodeAutoSelect();

}());
