(function (win) {
	"use strict";
	
	var libraries_test = function libraries_test (win) {
		var libraries = {
				/*
				 * jQuery
				 */
				"jQuery": function() {
					var lib = {
						homePage: "http://jquery.com/",
						version: undefined
					},
					
					jq = win.jQuery || win.$ || win.$jq || win.$j;
					
                	lib.version = jq && jq.fn && jq.fn.jquery;

                	return lib.version ? lib : undefined;
				}(),
				
				/*
				 * jQueryUI
				 */
				"jQueryUI": function() {
					var lib = {
						homePage: "http://jqueryui.com/",
						version: undefined
					},
					
					jq = win.jQuery || win.$ || win.$jq || win.$j;
					
					if(jq && jq.fn && jq.fn.jquery && jq.ui) {

						var plugins = 'accordion,datepicker,dialog,draggable,droppable,progressbar,resizable,selectable,slider,menu,grid,tabs'.split(','),
							concat = [];
						
						for (var i=0; i < plugins.length; i++) {
							if (jq.ui[plugins[i]]) {
								concat.push(plugins[i].substr(0,1).toUpperCase() + plugins[i].substr(1));
							}
						};
					
						lib.version = (jq.ui.version || ""); /* + (concat.length ? 'Plugins used: '+concat.join(', ') : '');*/
					}

                    return lib.version ? lib : undefined;
				}(),
				
				/*
				 * jQuery Mobile
				 */
				"jQueryMobile": function() {
					var lib = {
						homePage: "http://jquerymobile.com/",
						version: undefined
					},
					
					jq = win.jQuery || win.$ || win.$jq || win.$j;
					
					lib.version = jq && jq.fn && jq.fn.jquery && jq.mobile && jq.mobile.version;

					return lib.version ? lib : undefined;
				}(),
				
				/*
				 * Dojo
				 */
				"dojo": function() {
					var lib = {
						homePage: "http://dojotoolkit.org/",
						version: undefined
					};
					
					if(win.dojo || win.djConfig) {
						lib.version = win.dojo ? (win.dojo.version.toString()/* +  
							'\nDetails: '+(win.dijit ? 'Uses Dijit' : 'none')*/)  : " ";
					}
						
                    return lib.version ? lib : undefined;
				}(),
				
				/*
				 * Prototype
				 */
				"PrototypeJS": function() {
					var lib = {
						homePage: "http://prototypejs.org/",
						version: undefined
					};
					
					lib.version = win.Prototype && win.Prototype.Version;
						
                    return lib.version ? lib : undefined;
				}(),
				
				/*
				 * Scriptaculous
				 */
				"Scriptaculous": function() {
					var lib = {
						homePage: "http://script.aculo.us/",
						version: undefined
					};
					
					lib.version = win.Scriptaculous && win.Scriptaculous.Version;
						
                    return lib.version ? lib : undefined;
				}(),
				
				/*
				 * MooTools
				 */
				"MooTools": function() {
					var lib = {
						homePage: "http://mootools.net/",
						version: undefined
					};
					
					lib.version = win.MooTools && win.MooTools.version;
						
                    return lib.version ? lib : undefined;
				}(),
				
				/*
				 * Yahoo YUI
				 */
				"YUI 2": function() {
					var lib = {
						homePage: "http://developer.yahoo.com/yui/2/",
						version: undefined
					};
					
					lib.version = win.YAHOO && win.YAHOO.VERSION;
						
                    return lib.version ? lib : undefined;
				}(),
				
				"YUI 3": function() {
					var lib = {
						homePage: "http://yuilibrary.com/",
						version: undefined
					};
					
					lib.version = win.YUI && win.YUI.version;
						
                    return lib.version ? lib : undefined;
				}(),
				
				/*
				 * Sencha
				 */
				"Sencha": function() {
					var lib = {
						homePage: "",
						version: undefined
					};
					
					lib.version = (win.Ext && win.Ext.version.toString()) || 
									(win.Ext && (window.Ext.versions.extjs.toString() || 
													window.Ext.versions.core.toString()));
						
                    return lib.version ? lib : undefined;
				}(),
				
				/*
				 * Modernizr
				 */
				"Modernizr": function() {
					var lib = {
						homePage: "http://www.modernizr.com/",
						version: undefined
					};
					
					lib.version = win.Modernizr && win.Modernizr._version;
						
                    return lib.version ? lib : undefined;
				}(),
				
				/*
				 * GWT
				 */
				"GWT": function() {
					var lib = {
						homePage: "https://developers.google.com/web-toolkit/",
						version: undefined
					};
					
					lib.version = win.__gwt_scriptsLoaded ? " " : undefined;
						
                    return lib.version ? lib : undefined;
				}(),
				
				/*
				 * Spry JS
				 */
				"SpryJS": function() {
					var lib = {
						homePage: "http://labs.adobe.com/technologies/spry/home.html",
						version: undefined
					};
					
					lib.version = win.Spry ? " " : undefined;
						
                    return lib.version ? lib : undefined;
				}(),
				
				/*
				 * Qooxdoo
				 */
				"Qooxdoo": function() {
					var lib = {
						homePage: "http://qooxdoo.org/",
						version: undefined
					};
					
					lib.version = win.qx && win.qx.Bootstrap ? " " : undefined;
						
                    return lib.version ? lib : undefined;
				}(),
				
				/*
				 * base2
				 */
				"base2": function() {
					var lib = {
						homePage: "http://code.google.com/p/base2/",
						version: undefined
					};
					
					lib.version = win.base2 && win.base2.version;
						
                    return lib.version ? lib : undefined;
				}(),
				
				/*
				 * Closure
				 */
				"Closure": function() {
					var lib = {
						homePage: "https://developers.google.com/closure/",
						version: undefined
					};
					
					lib.version = win.goog ? " " : undefined;
						
                    return lib.version ? lib : undefined;
				}(),
				
				/*
				 * Raphael JS
				 */
				"Raphael JS": function() {
					var lib = {
						homePage: "http://raphaeljs.com/",
						version: undefined
					};
					
					lib.version = win.Raphael && win.Raphael.version;
						
                    return lib.version ? lib : undefined;
				}(),
				
				/*
				 * Processing.js
				 */
				"Processing.js": function() {
					var lib = {
						homePage: "http://processingjs.org/",
						version: undefined
					};
					
					lib.version = win.Processing && win.Processing.version;
						
                    return lib.version ? lib : undefined;
				}(),
				
				/*
				 * Backbone.js
				 */
				"backbone.js": function() {
					var lib = {
						homePage: "http://documentcloud.github.com/backbone/",
						version: undefined
					};
					
					lib.version = win.Backbone && win.Backbone.VERSION;
						
                    return lib.version ? lib : undefined;
				}(),
				
				/*
				 * Underscore.js
				 */
				"underscore.js": function() {
					var lib = {
						homePage: "http://documentcloud.github.com/underscore/",
						version: undefined
					};
					
					if (win._ && win._.VERSION && typeof win._.tap === 'function') {
						lib.version = win._.VERSION;
					}
						
                    return lib.version ? lib : undefined;
				}(),
				
				/*
				 * Sammy.js
				 */
				"Sammy.js": function() {
					var lib = {
						homePage: "http://sammyjs.org/",
						version: undefined
					};
					
					lib.version = win.Sammy && win.Sammy.VERSION;
						
                    return lib.version ? lib : undefined;
				}(),
				
				/*
				 * Rico
				 */
				"Rico": function() {
					var lib = {
						homePage: "http://openrico.org/",
						version: undefined
					};
					
					lib.version = win.Rico && win.Rico.Version;
						
                    return lib.version ? lib : undefined;
				}(),
				
				/*
				 * MochiKit
				 */
				"MochiKit": function() {
					var lib = {
						homePage: "http://mochi.github.com/mochikit/",
						version: undefined
					};
					
					lib.version = win.MochiKit && win.MochiKit.VERSION;
						
                    return lib.version ? lib : undefined;
				}(),
				
				/*
				 * gRaphael
				 */
				"gRaphael": function() {
					var lib = {
						homePage: "http://g.raphaeljs.com/",
						version: undefined
					};
					
					lib.version = win.Raphael && win.Raphael.g ? " " : undefined;
						
                    return lib.version ? lib : undefined;
				}(),
				
				/*
				 * Glow
				 */
				"Glow": function() {
					var lib = {
						homePage: "http://www.bbc.co.uk/glow/",
						version: undefined
					};
					
					lib.version = (win.glow && win.glow.VERSION) ||
									(win.Glow && win.Glow.version) ||
									(win.gloader ? " " : undefined);
						
                    return lib.version ? lib : undefined;
				}(),
				
				/*
				 * Socket.IO
				 */
				"Socket.IO": function() {
					var lib = {
						homePage: "http://socket.io/",
						version: undefined
					};
					
					lib.version = win.io && win.io.version;
						
                    return lib.version ? lib : undefined;
				}(),
				
				/*
				 * Mustache.js
				 */
				"mustache": function() {
					var lib = {
						homePage: "http://mustache.github.com/",
						version: undefined
					};
					
					lib.version = win.Mustache && win.Mustache.version;
						
                    return lib.version ? lib : undefined;
				}(),
				
				/*
				 * Fabric.js
				 */
				"fabric.js": function() {
					var lib = {
						homePage: "http://fabricjs.com/",
						version: undefined
					};
					
					lib.version = win.fabric && win.fabric.version;
						
                    return lib.version ? lib : undefined;
				}(),
				
				/*
				 * FuseJS
				 */
				"fuseJS": function() {
					var lib = {
						homePage: "http://fusejs.com/",
						version: undefined
					};
					
					lib.version = win.fuse && win.fuse.version;
						
                    return lib.version ? lib : undefined;
				}(),
				
				/*
				 * Tween.js
				 */
				"TweenJS": function() {
					var lib = {
						homePage: "http://tweenjs.com/",
						version: undefined
					};
					
					lib.version = win.Tween ? " " : undefined;
						
                    return lib.version ? lib : undefined;
				}(),
				
				/*
				 * SproutCore
				 */
				"SproutCore": function() {
					var lib = {
						homePage: "http://sproutcore.com/",
						version: undefined
					};
					
					lib.version = win.SC ? " " : undefined;
						
                    return lib.version ? lib : undefined;
				}(),
				
				/*
				 * Zepto.js
				 */
				"Zepto.js": function() {
					var lib = {
						homePage: "http://zeptojs.com/",
						version: undefined
					};
					
					lib.version = (win.Zepto && win.Zepto.fn) ? " " : undefined;
						
                    return lib.version ? lib : undefined;
				}(),
				
				/*
				 * three.js
				 */
				"threeJS": function() {
					var lib = {
						homePage: "http://mrdoob.github.com/three.js/",
						version: undefined
					};
					
					lib.version = win.THREE ? " " : undefined;
						
                    return lib.version ? lib : undefined;
				}(),
				
				/*
				 * Lightstreamer
				 */
				"Lightstreamer": function() {
					var lib = {
						homePage: "http://www.lightstreamer.com/",
						version: undefined
					};
					
					if(win.Lightstreamer && win.Lightstreamer.version) {
						lib.version = win.Lightstreamer.version;
					} else if (win.PushPage && win.NonVisualTable) { /*<=4.3*/
						lib.version = " ";
					}
					
                    return lib.version ? lib : undefined;
				}(),
				
				/*
				 * jQuery Tools
				 */
				"jQueryTools": function() {
					var lib = {
						homePage: "http://jquerytools.org/",
						version: undefined
					};
					
					jq = win.jQuery || win.$ || win.$jq || win.$j;
					
                	lib.version = jq && jq.fn && jq.fn.jquery && jq.tools && 
                					jq.tools.version && jq.tools.version.toString();
									
                    return lib.version ? lib : undefined;
				}(),
				
				/*
				 * requirejs
				 */
				"requirejs": function() {
					var lib = {
						homePage: "http://requirejs.org/",
						version: undefined
					};
					
					lib.version = (win.require && win.require.version) || 
									(win.requirejs && win.requirejs.version);
									
                    return lib.version ? lib : undefined;
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
			
			/*
			 * NOTE: base2.DOM modifies the JSON Object
			 */
			localStorage.setItem(localStorageKey, ((JSON.stringify && JSON.stringify(libraries)) || 
					(JSON.Object && JSON.Object.toJSONString && JSON.Object(libraries).toJSONString())) );
			
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