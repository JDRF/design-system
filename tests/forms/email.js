casper.
	start('http://localhost:3000/dist/components.html#forms').
	then(function(){
		phantomcss.screenshot('.f-example label[for=exampleInputEmail1]', 'Email Field Label');
	}).
	then(function(){
		phantomcss.screenshot('.f-example #exampleInputEmail1', 'Email Field');
	});

casper.run();
