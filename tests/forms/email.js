casper.
	start('http://localhost:3000/dist/components.html#forms').
	then(function(){
		phantomcss.screenshot('label[for=phantom-exampleInputEmail1]', 'Email Field Label');
	}).
	then(function(){
		phantomcss.screenshot('#phantom-exampleInputEmail1', 'Email Field');
	});

casper.run();
