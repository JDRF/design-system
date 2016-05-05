casper.
	start('http://localhost:3000/components.html#buttons').
	then(function(){
		phantomcss.screenshot('.f-example .btn.btn-primary', 'Primary Button');
	}).
	then(function(){
		phantomcss.screenshot('.f-example .btn.btn-primary.active', 'Primary (Hover) Button');
	}).
	then(function(){
		phantomcss.screenshot('.f-example .btn.btn-primary:disabled', 'Primary (Disabled) Button');
	});

casper.run();
