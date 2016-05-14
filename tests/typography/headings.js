casper.
	start('http://localhost:3000/dist/content.html#typography').
	then(function(){
		phantomcss.screenshot('#phantom-heading-1', 'Heading One');
	}).
	then(function(){
		phantomcss.screenshot('#phantom-heading-2', 'Heading Two');
	}).
	then(function(){
		phantomcss.screenshot('#phantom-heading-3', 'Heading Three');
	}).
	then(function(){
		phantomcss.screenshot('#phantom-heading-4', 'Heading Four');
	}).
	then(function(){
		phantomcss.screenshot('#phantom-heading-5', 'Heading Five');
	}).
	then(function(){
		phantomcss.screenshot('#phantom-heading-6', 'Heading Six');
	});

casper.run();
