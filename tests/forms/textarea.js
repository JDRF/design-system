casper.
	start('http://localhost:3000/dist/components.html#forms').
	then(function(){
		phantomcss.screenshot('.f-example label[for=exampleTextarea]', 'Textarea Field Label');
	}).
	then(function(){
		phantomcss.screenshot('.f-example #exampleTextarea', 'Textarea Field');
	});

casper.run();
