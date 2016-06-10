casper.
	start('http://localhost:3000/dist/components.html').
	then(function(){
		phantomcss.screenshot('#phantom-ds-card-content-header-footer', 'Content Card - Header & Footer');
	});
casper.run();
