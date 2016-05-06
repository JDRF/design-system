casper.
	start('http://localhost:3000/components.html#forms').
	then(function(){
		phantomcss.screenshot('.f-example label[for=exampleInputDate]', 'Date Field Label');
	}).
	then(function(){
		phantomcss.screenshot('.f-example #exampleInputDate', 'Date Field');
	});

casper.run();
