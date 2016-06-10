casper.
	start('http://localhost:3000/dist/components.html').
	then(function(){
		phantomcss.screenshot('#phantom-ds-card-content-type-image-text', 'Content Type Card - Image & Text');
	});
casper.run();
