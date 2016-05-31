casper.
	start('http://localhost:3000/dist/content.html').
	then(function(){
		phantomcss.screenshot('#phantom-ds-btn-left-icon-lg', 'Left Icon Large Button');
	}).
	then(function(){
		phantomcss.screenshot('#phantom-ds-btn-left-icon-normal', 'Left Icon Regular Button');
	}).
	then(function(){
		phantomcss.screenshot('#phantom-ds-btn-left-icon-sm', 'Left Icon Small Button');
	});

casper.run();