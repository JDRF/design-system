var test = require('tape');
var tapSpec = require('tap-spec');
// Uses node globals since there is no window to attach to.
var ripple = require('../../../src/js/ripple');

test('Color Test', function (t) {
	t.plan(2);

	var r = window.ripple(),
		$ripple = function() {
			return {
				width: function() {
					return 1;
				},
				css: function() {
					return 1;
				}
			}
		}(),
		options = {
			color: 'red',
		};

	var result = r.setColorOpacity( $ripple, options, $ripple );

	t.equal(result, 'red', 'New color is correct.');

	options.color = 1;

	result = r.setColorOpacity( $ripple, options, $ripple );

	t.equal(result, 1, 'Original color is correct.');
});
