casper.
	start('http://localhost:3000/dist/components.html#buttons').
	then(function(){
		phantomcss.screenshot('#phantom-btn-flat', 'Flat Button');
	}).
	then(function(){
		phantomcss.screenshot('#phantom-btn-flat-active', 'Flat (Hover) Button');
	}).
	then(function(){
		phantomcss.screenshot('#phantom-btn-flat-disabled', 'Flat (Disabled) Button');
	});

casper.run();
