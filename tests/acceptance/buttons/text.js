casper.
	start('http://localhost:3000/dist/components.html').
	then(function(){
		phantomcss.screenshot('#phantom-ds-btn-link', 'Text Button');
	}).
	then(function(){
		phantomcss.screenshot('#phantom-ds-btn-link-active', 'Text (Hover) Button');
	}).
	then(function(){
		phantomcss.screenshot('#phantom-ds-btn-link-disabled', 'Text (Disabled) Button');
	});

casper.run();
