casper.
	start('http://localhost:3000/dist/components.html').
	then(function(){
		phantomcss.screenshot('#phantom-ds-btn-flat', 'Flat Button');
	}).
	then(function(){
		phantomcss.screenshot('#phantom-ds-btn-flat-active', 'Flat (Hover) Button');
	}).
	then(function(){
		phantomcss.screenshot('#phantom-ds-btn-flat-disabled', 'Flat (Disabled) Button');
	});

casper.run();
