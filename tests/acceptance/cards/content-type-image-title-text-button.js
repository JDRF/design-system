casper.
	start('http://localhost:3000/dist/components.html').
	then(function(){
		phantomcss.screenshot('#phantom-ds-card-content-type-image-title-text-button', 'Content Type Card - Image, Title, Text, & Button');
	});
casper.run();
