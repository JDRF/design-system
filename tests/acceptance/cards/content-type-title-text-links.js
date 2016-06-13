casper.
	start('http://localhost:3000/dist/components.html').
	then(function(){
		phantomcss.screenshot('#phantom-ds-card-content-type-title-text-links', 'Content Type Card - Title, Text, & Links');
	});
casper.run();
