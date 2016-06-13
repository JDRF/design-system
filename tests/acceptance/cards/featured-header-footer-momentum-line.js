casper.
	start('http://localhost:3000/dist/components.html').
	then(function(){
		phantomcss.screenshot('#phantom-ds-card-featured-hero', 'Featured Card - Hero Image with Momentum Line Mask, Header, & Footer');
	});
casper.run();
