casper.
	start('http://localhost:3000/dist/content.html').
	then(function(){
		phantomcss.screenshot('#phantom-ds-display-1', 'Display One');
	}).
	then(function(){
		phantomcss.screenshot('#phantom-ds-display-2', 'Display Two');
	});

casper.run();
