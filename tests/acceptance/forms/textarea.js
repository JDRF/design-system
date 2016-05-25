casper.
	start('http://localhost:3000/dist/components.html').
	then(function(){
		phantomcss.screenshot('label[for=phantom-exampleTextarea]', 'Textarea Field Label');
	}).
	then(function(){
		phantomcss.screenshot('#phantom-exampleTextarea', 'Textarea Field');
	});

casper.run();
