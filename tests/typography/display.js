casper.
	start('http://localhost:3000/content.html#typography').
	then(function(){
		phantomcss.screenshot('.f-example .display-1', 'Display One');
	}).
	then(function(){
		phantomcss.screenshot('.f-example .display-2', 'Display Two');
	}).
	then(function(){
		phantomcss.screenshot('.f-example .display-3', 'Display Three');
	}).
	then(function(){
		phantomcss.screenshot('.f-example .display-4', 'Display Six');
	});

casper.run();
