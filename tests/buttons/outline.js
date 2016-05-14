casper.
	start('http://localhost:3000/dist/components.html#buttons').
	then(function(){
		phantomcss.screenshot('#phantom-btn-outline', 'Primary Outline Button');
	}).
	then(function(){
		phantomcss.screenshot('#phantom-btn-outline-active', 'Primary Outline (Hover) Button');
	}).
	then(function(){
		phantomcss.screenshot('#phantom-btn-outline-disabled', 'Primary Outline (Disabled) Button');
	});

casper.run();
