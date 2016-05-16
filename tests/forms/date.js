casper.
	start('http://localhost:3000/dist/components.html').
	then(function(){
		phantomcss.screenshot('label[for=phantom-exampleInputDate]', 'Date Field Label');
	}).
	then(function(){
		phantomcss.screenshot('#phantom-exampleInputDate', 'Date Field');
	});

casper.run();
