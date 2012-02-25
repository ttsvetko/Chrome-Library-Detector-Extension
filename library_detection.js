(function(win) {
	"use strict";
	
	var localStorageKey = "library_detector_ffe38401e7efb22290a9ddb8ffac6f7d01e33f68";
	
	function libraries_test(win) {
		var libraries = {
				"jQuery": function() {
					var version = undefined,
						jq = win.jQuery || win.$ || win.$jq || win.$j;
	                    if (jq && jq.fn && jq.fn.jquery) {
	                    	version = jq.fn.jquery;
	                    }
	                    return version;
				}()
			},
			
			/* Keep local pointer to localStorage object */
			localStorage = win.localStorage,
			/* localStorage Key */
			localStorageKey = "library_detector_ffe38401e7efb22290a9ddb8ffac6f7d01e33f68",
			
			triggerStorageEvent = function() {
				var doc = win.document,
		        	storageEvent = doc.createEvent("StorageEvent");
		        
				storageEvent.initStorageEvent("storage", false, false, localStorageKey, null, localStorage[localStorageKey], null, null);
				win.console.dir(storageEvent);
		        win.dispatchEvent(storageEvent);
			};
			
			delete localStorage[localStorageKey];
			
            localStorage.setItem(localStorageKey, JSON.stringify(libraries));
            
            /**
             * Trigger manually onstorage event
             */
            triggerStorageEvent();
	}
	
	win.addEventListener("storage", function() {
		chrome.extension.sendRequest({libraries: win.localStorage[localStorageKey]});
		
		delete win.localStorage[localStorageKey];
	}, false);
	
	//Run page test
    win.location = "javascript: " + libraries_test.toString() + "; libraries_test(window); void(0);";
	
}(window));