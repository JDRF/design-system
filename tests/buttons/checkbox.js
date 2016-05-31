casper.
	start('http://localhost:3000/dist/components.html').
	then(function(){
		phantomcss.screenshot('#phantom-ds-checkbox-buttons', 'Checkbox Buttons');
	});

casper.run();
