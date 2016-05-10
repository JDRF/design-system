casper.
	start('http://localhost:3000/dist/components.html#forms').
	then(function(){
		phantomcss.screenshot('.f-example label[for=exampleInputText1]', 'Text Field Label');
	}).
	then(function(){
		phantomcss.screenshot('.f-example #exampleInputText1', 'Text Field');
	});

casper.run();
