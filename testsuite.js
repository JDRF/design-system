casper.
	start('http://localhost:3000').
	then(function(){
		phantomcss.screenshot('.f-header-center', 'JDRF Design System');
	});

casper.run();
