'use strict';

var jQuery = typeof jQuery !== 'undefined' ? window.jQuery : global.jQuery;
var doc = typeof window !== 'undefined' ? document : global.document;
var win = typeof window !== 'undefined' ? window : global.window;

( function( $ ) {

	win.ripple = function( selector, options ) {

		var init = function() {

			var self = this;

			self.selector = selector;
			self.defaults = {
				debug: false,
				on: 'mousedown',

				opacity: 0.4,
				color: 'auto',
				multi: false,

				duration: 0.7,
				rate: function( pxPerSecond ) {
					return pxPerSecond;
				},

				easing: 'linear'
			};

			self.defaults = $.extend( {}, self.defaults, options );

			$( doc ).on( self.defaults.on, self.selector, rippleTrigger.bind( self ) );
		};

		var rippleTrigger = function( e ) {

			var $this = $( e.target );
			var $ripple;
			var settings;

			// Add ds-has-ripple class
			$this.addClass( 'ds-has-ripple' );

			// This instances settings
			settings = $.extend( {}, this.defaults, $this.data() );

			// Create the ripple element
			if ( settings.multi || !settings.multi && $this.find( '.ds-ripple' ).length === 0 ) {
				$ripple = $( '<span></span>' ).addClass( 'ds-ripple' );
				$ripple.appendTo( $this );

				// Set ripple size
				setRippleSize( $ripple, $this );

				// Give the user the ability to change the rate of the animation
				// based on element width
				if ( settings.rate && typeof settings.rate === 'function' ) {
					//settings duration = to returned new duration
					settings.duration = this.setAnimationRate( $ripple, settings );
				}

				// Set the color and opacity
				settings.color = setColorOpacity( $ripple, settings, $this );

				$ripple.css( {
					background: settings.color,
					animationDuration: settings.duration.toString() + 's',
					animationTimingFunction: settings.easing,
					opacity: settings.opacity
				} );
			}

			// Ensure we always have the ripple element
			if ( !settings.multi ) {
				$ripple = $this.find( '.ds-ripple' );
			}

			// Kill animation
			$ripple.removeClass( 'ds-ripple-animate' );

			/**
			 * We want to delete the ripple elements if we allow multiple so we dont
			 * sacrifice any page performance. We don't do this on single ripples
			 * because once it has rendered, we only need to trigger paints thereafter.
			 */
			if ( settings.multi ) {
				$ripple.one( 'animationend webkitAnimationEnd oanimationend MSAnimationEnd',
					function() {
						$( this ).remove();
					}
				);
			}

			// Set position and animate
			setPosAnimation( $ripple, $this, e );
		};

		var setRippleSize = function( $rippleSpan, el ) {
			var $selector = el;

			// Set ripple size
			if ( !$rippleSpan.height() && !$rippleSpan.width() ) {
				var size = Math.max( $selector.outerWidth(), $selector.outerHeight() );

				$rippleSpan.css( {
					height: size,
					width: size
				} );
			}
		};

		var setAnimationRate = function( $rippleSpan, userSettings ) {
			// rate = pixels per second
			var rate = Math.round( $rippleSpan.width() / userSettings.duration );

			// new amount of pixels per second
			var filteredRate = userSettings.rate( rate );

			// Determine the new duration for the animation
			var newDuration = $rippleSpan.width() / filteredRate;

			// Set the new duration if it has not changed
			if ( userSettings.duration.toFixed( 2 ) !== newDuration.toFixed( 2 ) ) {
				return newDuration;
			}

			return userSettings.duration;

		};

		var setColorOpacity = function( $rippleSpan, userSettings, el ) {
			// Set the color and opacity
			var color = userSettings.color === 'auto' ? el.css( 'color' ) : userSettings.color;

			return color;
		};

		var setPosAnimation = function( $rippleSpan, el, event ) {
			var $this = el,
				$event = event;

			// Retrieve coordinates
			var x = $event.pageX - $this.offset().left - $rippleSpan.width() / 2;
			var y = $event.pageY - $this.offset().top - $rippleSpan.height() / 2;

			// Set position and animate
			$rippleSpan.css( {
				top: y + 'px',
				left: x + 'px'
			} );

			$rippleSpan.addClass( 'ds-ripple-animate' );

			return $rippleSpan;
		};

		return {
			init: init,
			setAnimationRate: setAnimationRate,
			setColorOpacity: setColorOpacity
		};

	};

} )( jQuery, doc );
