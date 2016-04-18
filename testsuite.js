casper.
	start('http://www.google.com').
	then(function(){
		phantomcss.screenshot('#hplogo', 'google');
	});

casper.run();
