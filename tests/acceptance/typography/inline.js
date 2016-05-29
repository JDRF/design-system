casper.
	start('http://localhost:3000/dist/content.html').
	then(function(){
		phantomcss.screenshot('#phantom-ds-inline-elements', 'Inline Text Elements');
	});

casper.run();
