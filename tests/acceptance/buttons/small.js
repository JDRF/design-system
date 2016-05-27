casper.
	start('http://localhost:3000/dist/components.html').
	then(function(){
		phantomcss.screenshot('#phantom-ds-btn-sm', 'Small Button');
	}).
	then(function(){
		phantomcss.screenshot('#phantom-ds-btn-sm-active', 'Small (Hover) Button');
	}).
	then(function(){
		phantomcss.screenshot('#phantom-ds-btn-sm-disabled', 'Small (Disabled) Button');
	});

casper.run();