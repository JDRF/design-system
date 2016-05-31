casper.
	start('http://localhost:3000/dist/components.html').
	then(function(){
		phantomcss.screenshot('label[for=phantom-exampleInputTel]', 'Telephone Field Label');
	}).
	then(function(){
		phantomcss.screenshot('#phantom-exampleInputTel', 'Telephone Field');
	});

casper.run();
