casper.
	start('http://localhost:3000/dist/components.html').
	then(function(){
		phantomcss.screenshot('#phantom-sidebar-single', 'Sidebar Single Level');
	}).
	then(function(){
		phantomcss.screenshot('#phantom-sidebar-two', 'Sidebar Two Levels');
	});

casper.run();