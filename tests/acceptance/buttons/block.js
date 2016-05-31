casper.
	start('http://localhost:3000/dist/components.html').
	then(function(){
		phantomcss.screenshot('#phantom-ds-btn-block', 'Block Button');
	}).
	then(function(){
		phantomcss.screenshot('#phantom-ds-btn-block-active', 'Block (Hover) Button');
	}).
	then(function(){
		phantomcss.screenshot('#phantom-ds-btn-block-disabled', 'Block (Disabled) Button');
	});

casper.run();