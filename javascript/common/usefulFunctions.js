// Relies on jQuery 1.7.2 library

function clearFormErrors() {
	$('.form-error').html("");
}

/** INCOMPLETE
 * add a function to the window.onload event
 * @param newFunc 
 *	- Reference to the function to add
 *
 * @param params
 *	- An associative array containing
 */
function addOnLoadEvent(var newFunc, var params) {
	// extract param values and call cuntion with them
	if(window.attachEvent) {
		window.attachEvent('onLoad', yourFunctionName);
	} else {
		if(window.onload) {
			var curronload = window.onload;
			var newonload = function() {
				curronload();
				yourFunctionName();
			};
			window.onload = newonload;
		} else {
			window.onload = yourFunctionName;
		}
	}
}
