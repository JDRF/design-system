casper.
	start('http://localhost:3000/dist/components.html').
	then(function(){
		phantomcss.screenshot('#phantom-ds-btn-ripple', 'Animation Ripple');
	});
casper.run();
