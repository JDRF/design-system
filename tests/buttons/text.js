casper.
	start('http://localhost:3000/components.html#buttons').
	then(function(){
		phantomcss.screenshot('.f-example .btn.btn-link', 'Text Button');
	}).
	then(function(){
		phantomcss.screenshot('.f-example .btn.btn-link.active', 'Text (Hover) Button');
	}).
	then(function(){
		phantomcss.screenshot('.f-example .btn.btn-link:disabled', 'Text (Disabled) Button');
	});

casper.run();
