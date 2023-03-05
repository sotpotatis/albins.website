<script>
	import Header from '../sections/Header.svelte';
	import Body from '../sections/Body.svelte';
	import Footer from '../sections/Footer.svelte';
	import DarkModeToggle from '../components/DarkModeToggle.svelte';
	import { onMount } from 'svelte';
	import { colorThemeChangedEventName } from '../libraries/darkMode.js';
	// Handle dark mode changes
	let darkModeActive = false;
	function onColorThemeChange(event) {
		darkModeActive = event.detail.newColorTheme === 'dark';
	}
	// Add event listener for color theme change on mount
	onMount(() => {
		document.addEventListener(colorThemeChangedEventName, onColorThemeChange);
	});
</script>

<!-- Add meta tags -->
<svelte:head>
	<title>albin's personal website - albins.website</title>
	<!-- Site description, site title etc. -->
	<meta name="title" content="Albins Website" />
	<meta
		name="description"
		content="Hi! I am Albin Seijmer (or sotpotatis) and I am a developer with experience with various programming languages. Check them out on my website!"
	/>
	<meta name="language" content="English" />
	<meta name="author" content="Albin Seijmer" />
	<meta name="theme-color" content="#5fa6fa" />
	<!-- Favicon -->
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" />
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5fa6fa" />
	<meta name="msapplication-TileColor" content="#9f00a7" />
	<meta name="theme-color" content="#ffffff" />
</svelte:head>
<div class={darkModeActive ? 'dark' : ''}>
	<!-- Add rest of page body -->
	<div class="bg-gray-100 dark:bg-gray-800 dark:text-gray-200 min-h-screen max-w-screen p-0" id="main">
		<DarkModeToggle />
		<Header />
		<Body />
		<Footer />
	</div>
</div>
