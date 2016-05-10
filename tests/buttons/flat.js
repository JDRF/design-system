casper.
	start('http://localhost:3000/dist/components.html#buttons').
	then(function(){
		phantomcss.screenshot('.f-example .btn.btn-flat', 'Flat Button');
	}).
	then(function(){
		phantomcss.screenshot('.f-example .btn.btn-flat.active', 'Flat (Hover) Button');
	}).
	then(function(){
		phantomcss.screenshot('.f-example .btn.btn-flat:disabled', 'Flat (Disabled) Button');
	});

casper.run();
