casper.
	start('http://localhost:3000/dist/components.html').
	then(function(){
		phantomcss.screenshot('#phantom-ds-card-image-cap', 'Image Cap Card');
	});
casper.run();
