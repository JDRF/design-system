casper.
	start('http://localhost:3000/dist/components.html').
	then(function(){
		phantomcss.screenshot('#phantom-ds-card-content-header', 'Content Card - Header');
	});
casper.run();
