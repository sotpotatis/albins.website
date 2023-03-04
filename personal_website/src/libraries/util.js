/* utilities.js
Various utilities when using the project. */
export function passClassList(classes) {
	/** Allows you to pass a list of classes to an HTML component
     by converting the list to a space-delimited string
     at render.
     @param classes: A list of classes to generate class strings from. */
	return classes.join(' ');
}
export function openURL(url, newWindow = true) {
	/** Helper function for opening a URL.
	 * @param url The URL to open.
	 * @param newWindow Whether to open the URL in a new window or not.
	 * Optional parameter (default is true)*/
	if (url !== null) {
		console.log(`Opening URL ${url} in ${newWindow ? 'new window' : 'this window'}...`);
		window.open(url, newWindow ? 'blank' : '_self');
	}
}
