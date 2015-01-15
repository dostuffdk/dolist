(function() {

	"use strict";

	// If already supported by browser, abort
	if ("list" in document.createElement("input") && "options" in document.createElement("datalist")) {
		return;
	}

	if (document.readyState != "complete") {
		document.addEventListener("DOMContentLoaded", init, false);
	} else {
		init();
	}

	function init() {
		var optionsElement,
			i;

		// Find candidates and apply our magic
		var inputElements = document.querySelectorAll("input[list]");
		for (i = 0; i < inputElements.length; i++) {
			optionsElement = document.getElementById(inputElements[i].getAttribute("list"));
			if (optionsElement) {
				polyfill(inputElements[i], optionsElement);
			}
		}
	}

	function polyfill(inputElm, datalistElm) {
		// Here be dragons
	}

})();