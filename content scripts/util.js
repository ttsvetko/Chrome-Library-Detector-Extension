(function(win) {
	"use strict";
	
	/*
	 * OnStorage Event
	 * 
	 * Send message to the background page with detected libraries.
	 * Clear the stored result in the localStorage on callback
	 */
	win.addEventListener("storage", function(event) {
		console.log(event)
		chrome.extension.sendRequest({libraries: win.localStorage[event.key]}, function(response) {
			delete win.localStorage[localStorageKey];
		});
	}, false);
	
	
	
}(window));