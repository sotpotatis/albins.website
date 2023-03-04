/* darkMode.js
Several utilities related to dark mode on the page. */
// Create a custom event for when color theme is changed
export const colorThemeChangedEventName = 'colorThemeChanged';
export function getUserPreferredTheme() {
	/* Gets the theme that the user prefers, light or dark. */
	return ('theme' in localStorage && localStorage.theme === 'dark') ||
		window.matchMedia('(prefers-color-scheme:dark)').matches
		? 'dark'
		: 'light';
}
export function setColorTheme(colorTheme) {
	localStorage.theme = colorTheme;
	console.log(`Setting color theme to ${colorTheme}...`);
	document.dispatchEvent(
		new CustomEvent(colorThemeChangedEventName, { detail: { newColorTheme: colorTheme } })
	);
}
