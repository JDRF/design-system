casper.
	start('http://localhost:3000/dist/components.html').
	then(function(){
		phantomcss.screenshot('#phantom-ds-btn-lg', 'Large Button');
	}).
	then(function(){
		phantomcss.screenshot('#phantom-ds-btn-lg-active', 'Large (Hover) Button');
	}).
	then(function(){
		phantomcss.screenshot('#phantom-ds-btn-lg-disabled', 'Large (Disabled) Button');
	});

casper.run();