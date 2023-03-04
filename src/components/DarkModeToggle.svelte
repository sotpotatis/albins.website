<!-- DarkModeToggle.svelte
A button to toggle dark mode on the page -->
<script>
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	import { getUserPreferredTheme, setColorTheme } from '../libraries/darkMode.js';
	let colorTheme = null;
	// Auto set color theme if not set
	if (colorTheme === null) {
		onMount(() => {
			// Check what color theme the user prefers
			colorTheme = getUserPreferredTheme();
			setColorTheme(colorTheme);
		});
	}
	function invertColorTheme() {
		/* Function to invert/change the color theme. */
		console.log('Updating color theme...');
		colorTheme = colorTheme === 'dark' ? 'light' : 'dark';
		console.log(`New color theme: ${colorTheme}`);
		setColorTheme(colorTheme);
	}
</script>

<button
	class="absolute text-3xl text-gray-500 dark:text-gray-200 right-8 top-8 z-10"
	on:click={invertColorTheme}
>
	<Icon icon="mdi:theme-light-dark" />
</button>
