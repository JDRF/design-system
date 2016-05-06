casper.
	start('http://localhost:3000/components.html#side-navigation').
	then(function(){
		phantomcss.screenshot('.f-example .sidebar', 'Sidebar Single Level');
	});

casper.run();