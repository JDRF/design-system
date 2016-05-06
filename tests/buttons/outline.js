casper.
	start('http://localhost:3000/components.html#buttons').
	then(function(){
		phantomcss.screenshot('.f-example .btn.btn-primary-outline', 'Primary Outline Button');
	}).
	then(function(){
		phantomcss.screenshot('.f-example .btn.btn-primary-outline.active', 'Primary Outline (Hover) Button');
	}).
	then(function(){
		phantomcss.screenshot('.f-example .btn.btn-primary-outline:disabled', 'Primary Outline (Disabled) Button');
	});

casper.run();
