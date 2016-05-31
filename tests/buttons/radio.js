casper.
	start('http://localhost:3000/dist/components.html').
	then(function(){
		phantomcss.screenshot('#phantom-ds-radio-buttons', 'Radio Buttons');
	});

casper.run();
