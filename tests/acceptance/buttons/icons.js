casper.
	start('http://localhost:3000/dist/content.html').
	then(function(){
		phantomcss.screenshot('#phantom-ds-btn-icon-primary', 'Icon Only Primary Button');
	}).
	then(function(){
		phantomcss.screenshot('#phantom-ds-btn-icon-outline', 'Icon Only Outline Button');
	}).
	then(function(){
		phantomcss.screenshot('#phantom-ds-btn-icon-flat', 'Icon Only Flat Button');
	});

casper.run();