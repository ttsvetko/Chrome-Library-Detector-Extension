(function(win) {
	"use strict";
	
	var onStorageEventListener = function(event) {
		var localStorage_key = event.key,
			localStorage = win.localStorage;
		
		
		chrome.extension.sendRequest(JSON.parse(localStorage[localStorage_key]));
		delete localStorage[localStorage_key];
		removeLocalStorageEventListner();
		
	},
	
	addLocalStorageEventListener = function() {
		/*
		 * OnStorage Event
		 * 
		 * Send message to the background page with detected libraries.
		 * Clear the stored result in the localStorage on callback
		 */
		win.addEventListener("storage", onStorageEventListener, false);
	},
	
	removeLocalStorageEventListner = function() {
		win.removeEventListener("storage", onStorageEventListener, false);
	};
	
	
	addLocalStorageEventListener();
	
}(window));