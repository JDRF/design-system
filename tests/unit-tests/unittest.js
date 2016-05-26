var test = require('tape');
// Node globals.
global.jQuery = require('jquery');
global.document = {};
global.window = {};
// Uses node globals since there is no window to attach to.
var ripple = require('../../src/js/ripple');

test('ripple Test', function (t) {
	t.plan(1);

	var r = window.ripple(),
		options = {
			duration : 0.7,
			rate : function() {
				return 1;
			}
		},
		$ripple = function() {
			return {
				width: function() {
					return 1;
				}
			}
		}();

	var result = r.setAnimationRate( $ripple, options );

	t.equal(result, 1.00, 'New Duration is correct');

	// Create a second that tests so the original duration is passed back.

});
