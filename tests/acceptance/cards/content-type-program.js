casper.
	start('http://localhost:3000/dist/components.html').
	then(function(){
		phantomcss.screenshot('#phantom-ds-card-content-type-program', 'Content Type Card - Program');
	});
casper.run();
