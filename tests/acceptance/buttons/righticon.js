casper.
	start('http://localhost:3000/dist/content.html').
	then(function(){
		phantomcss.screenshot('#phantom-ds-btn-right-icon-lg', 'Right Icon Large Button');
	}).
	then(function(){
		phantomcss.screenshot('#phantom-ds-btn-right-icon-normal', 'Right Icon Regular Button');
	}).
	then(function(){
		phantomcss.screenshot('#phantom-ds-btn-right-icon-sm', 'Right Icon Small Button');
	});

casper.run();