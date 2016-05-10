casper.
	start('http://localhost:3000/dist/content.html#typography').
	then(function(){
		phantomcss.screenshot('.f-example h1', 'Heading One');
	}).
	then(function(){
		phantomcss.screenshot('.f-example h2', 'Heading Two');
	}).
	then(function(){
		phantomcss.screenshot('.f-example h3', 'Heading Three');
	}).
	then(function(){
		phantomcss.screenshot('.f-example h4', 'Heading Four');
	}).
	then(function(){
		phantomcss.screenshot('.f-example h5', 'Heading Five');
	}).
	then(function(){
		phantomcss.screenshot('.f-example h6', 'Heading Six');
	});

casper.run();
