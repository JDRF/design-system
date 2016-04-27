(function ($) {
	'use strict';

	// Proof of concept
	// https://jsfiddle.net/sk829spm/

	$(document).on( 'click.bs.modal.data-api', '[data-toggle="jdrf-modal"]', function ( event ) {
		var selector = this.getAttribute( 'data-target' );
		$( selector ).modal();
		$( selector ).on( 'click.dismiss.bs.modal-api', '[data-dismiss="jdrf-modal"]', function ( event ) {
			$( selector ).modal( 'hide' );
		});
	});

})(jQuery);
