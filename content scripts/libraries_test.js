(function (win) {
	"use strict";
	
	var libraries_test = function libraries_test (win) {
		var libraries = {
				"jQuery": function() {
					var version = undefined;
					
						jq = win.jQuery || win.$ || win.$jq || win.$j;
	                    if (jq && jq.fn && jq.fn.jquery) {
	                    	version = jq.fn.jquery;
	                    }
	                    return version;
				}()
			},
			
			/* Keep local pointer to localStorage object */
			localStorage = win.localStorage,
			
			/*
			 * Store temporary date into the localStorgare.
			 * Once stored data(detected libraries object) is sent ot the background page,
			 * the stored value is remove from the localStorage
			 * 
			 * library_detector_ffe38401e7efb22290a9ddb8ffac6f7d01e33f68 = "library_detector_" + sha1("library_detector_");
			 * 
			 */
			localStorageKey = "library_detector_ffe38401e7efb22290a9ddb8ffac6f7d01e33f68",
			
			/*
			 * Trigger custom "onstorage" event to notify the content script that
			 * library detection is completed. Then, content script reads the result
			 * from the localStorage and send it to the extension's background page.
			 * 
			 * Once the result is sent to the background page,
			 * the stored value into the localStorage is removed.
			 * 
			 */
			triggerStorageEvent = function() {
				var doc = win.document,
		        	storageEvent = doc.createEvent("StorageEvent");
		        
				storageEvent.initStorageEvent("storage", false, false, localStorageKey, null, localStorage[localStorageKey], null, null);
		        win.dispatchEvent(storageEvent);
			};
			
			
			localStorage.setItem(localStorageKey, JSON.stringify(libraries));
			/**
			 * Trigger manually onstorage event
			 */
			triggerStorageEvent();
			
	};
	
	/*
	 * Run test
	 * 
	 * Test is performed by setting javascript code as url,
	 * so can have access to the global window object.
	 * 
	 */
    win.location = "javascript: " + libraries_test.toString() + "; libraries_test(window); void(0);";
}(window));