casper.
	start('http://localhost:3000/dist/components.html').
	then(function(){
		phantomcss.screenshot('#phantom-btn-loading', 'Animation Loading');
	});
casper.run();
