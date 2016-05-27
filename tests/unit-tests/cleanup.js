function cleanup() {
	delete global.jQuery;
	delete global.document;
	delete global.window;
}

cleanup();
