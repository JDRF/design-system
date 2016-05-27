casper.
	start('http://localhost:3000/dist/components.html').
	then(function(){
		phantomcss.screenshot('#phantom-ds-btn-outline', 'Primary Outline Button');
	}).
	then(function(){
		phantomcss.screenshot('#phantom-ds-btn-outline-active', 'Primary Outline (Hover) Button');
	}).
	then(function(){
		phantomcss.screenshot('#phantom-ds-btn-outline-disabled', 'Primary Outline (Disabled) Button');
	});

casper.run();
