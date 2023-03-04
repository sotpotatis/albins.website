<!-- Header.svelte
Defines the page header. -->
<script>
	import CircularText from '../components/CircularText.svelte';
	import HeadingButtons from '../components/Heading/HeadingButtons.svelte';
	import TechnologyIcons from '../components/TechnologyIcon/TechnologyIcons.svelte';
	import NowPlaying from '../components/NowPlaying/NowPlaying.svelte';
	import HeadingImage from '../components/Heading/HeadingImage.svelte';
</script>

<div
	class="bg-gray-300 dark:bg-gray-900 max-w-screen p-12 flex flex-col gap-y-4 items-center justify-center text-center sticky top-0 z-0"
>
	<HeadingImage />
	<p class="font-bold">Links:</p>
	<HeadingButtons />
	<p class="font-bold">(Some) skills:</p>
	<TechnologyIcons
		size="big"
		icons={[
			'python',
			'micropython',
			'javascript',
			'csharp',
			'flask',
			'django',
			'react',
			'svelte',
			'tailwind'
		]}
	/>
</div>
