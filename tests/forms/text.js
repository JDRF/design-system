casper.
	start('http://localhost:3000/dist/components.html').
	then(function(){
		phantomcss.screenshot('label[for=phantom-exampleInputText1]', 'Text Field Label');
	}).
	then(function(){
		phantomcss.screenshot('#phantom-exampleInputText1', 'Text Field');
	});

casper.run();
