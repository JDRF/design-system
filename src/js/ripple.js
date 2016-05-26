'use strict';

( function( $, document ) {

	window.ripple = function( selector, options ) {

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

			$( document ).on( self.defaults.on, self.selector, rippleTrigger );
		};

		var rippleTrigger = function( e ) {

			var $this = $( this );
			var $ripple;
			var settings;

			// Add ds-has-ripple class
			addNewClass( $this, 'ds-has-ripple' );

			// This instances settings
			settings = $.extend( {}, self.defaults, $this.data() );

			// Create the ripple element
			if ( settings.multi || !settings.multi && $this.find( '.ds-ripple' ).length === 0 ) {
				$ripple = $( '<span></span>' ).addClass( 'ds-ripple' );
				$ripple.appendTo( $this );

				// Set ripple size
				setRippleSize( $ripple, $this );

				// Give the user the ability to change the rate of the animation
				// based on element width
				if ( settings.rate && typeof settings.rate === 'function' ) {
					setAnimationRate( $ripple, settings );
				}

				// Set the color and opacity
				setColorOpacity( $ripple, settings, $this );
			}

			// Ensure we always have the ripple element
			if ( !settings.multi ) {
				$ripple = $this.find( '.ds-ripple' );
			}

			// Kill animation
			killAnimation( $ripple );

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

		var setRippleSize = function( rippleSpan, el ) {
			var $rippleSpan = rippleSpan,
				$selector = el;

			// Set ripple size
			if ( !$rippleSpan.height() && !$rippleSpan.width() ) {
				var size = Math.max( $selector.outerWidth(), $selector.outerHeight() );

				$rippleSpan.css( {
					height: size,
					width: size
				} );
			}
		};

		var setAnimationRate = function( rippleSpan, userSettings ) {
			var $rippleSpan = rippleSpan,
				$settings = userSettings;

			// rate = pixels per second
			var rate = Math.round( $rippleSpan.width() / $settings.duration );

			// new amount of pixels per second
			var filteredRate = $settings.rate( rate );

			// Determine the new duration for the animation
			var newDuration = $rippleSpan.width() / filteredRate;

			// Set the new duration if it has not changed
			if ( $settings.duration.toFixed( 2 ) !== newDuration.toFixed( 2 ) ) {
				$settings.duration = newDuration;
			}
		};

		var setColorOpacity = function( rippleSpan, userSettings, el ) {
			var $rippleSpan = rippleSpan,
				$settings = userSettings,
				$this = el;

			// Set the color and opacity
			var color = $settings.color === 'auto' ? $this.css( 'color' ) : $settings.color;
			var css = {
				animationDuration: $settings.duration.toString() + 's',
				animationTimingFunction: $settings.easing,
				background: color,
				opacity: $settings.opacity
			};

			$rippleSpan.css( css );

			return [ $settings.color, $settings.opacity ];
		};

		var setPosAnimation = function( rippleSpan, el, event ) {
			var $rippleSpan = rippleSpan,
				$this = el,
				$event = event;

			// Retrieve coordinates
			var x = $event.pageX - $this.offset().left - $rippleSpan.width() / 2;
			var y = $event.pageY - $this.offset().top - $rippleSpan.height() / 2;

			// Set position and animate
			$rippleSpan.css( {
				top: y + 'px',
				left: x + 'px'
			} );

			addNewClass( $rippleSpan, 'ds-ripple-animate' );

			return $rippleSpan;
		};

		var addNewClass = function( el, newClass ) {
			var $this = el;

			$this.addClass( newClass );

			return $this;
		};

		var killAnimation = function( rippleSpan ) {
			var $rippleSpan = rippleSpan;

			// Kill animation
			$rippleSpan.removeClass( 'ds-ripple-animate' );

			return $rippleSpan;
		};

		init();

	};

} )( jQuery, document );
