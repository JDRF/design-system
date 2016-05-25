casper.
	start('http://localhost:3000/dist/components.html').
	then(function(){
		phantomcss.screenshot('#phantom-btn-primary', 'Primary Button');
	}).
	then(function(){
		phantomcss.screenshot('#phantom-btn-primary-active', 'Primary (Hover) Button');
	}).
	then(function(){
		phantomcss.screenshot('#phantom-btn-primary-disabled', 'Primary (Disabled) Button');
	});

casper.run();
