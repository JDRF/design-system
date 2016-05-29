casper.
	start('http://localhost:3000/dist/content.html').
	then(function(){
		phantomcss.screenshot('#phantom-ds-blockquote', 'Blockquote');
	});

casper.run();
