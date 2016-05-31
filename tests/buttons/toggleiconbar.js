casper.
	start('http://localhost:3000/dist/components.html').
	then(function(){
		phantomcss.screenshot('#phantom-ds-toggle-icon-bar', 'Toggle Icon Bar');
	});

casper.run();
