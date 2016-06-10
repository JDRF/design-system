casper.
	start('http://localhost:3000/dist/components.html').
	then(function(){
		phantomcss.screenshot('#phantom-ds-card-featured', 'Featured Card - Header');
	});
casper.run();
