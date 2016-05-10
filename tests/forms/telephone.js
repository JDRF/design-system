casper.
	start('http://localhost:3000/dist/components.html#forms').
	then(function(){
		phantomcss.screenshot('.f-example label[for=exampleInputTel]', 'Telephone Field Label');
	}).
	then(function(){
		phantomcss.screenshot('.f-example #exampleInputTel', 'Telephone Field');
	});

casper.run();
