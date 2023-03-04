<!-- NowPlayingIcon.svelte -->
<script>
	import Icon from '../Icon.svelte';
	export let toggleNowPlayingInformation; // Function to run when the icon should toggle the NowPlayingData.svelte component
</script>

<div
	class="rounded-full bg-gray-200 dark:bg-gray-600 dark:text-black max-w-fit p-3 relative left-3/4 top-[-2vw]"
>
	<Icon size="big" icon="bi:music-note-beamed" onClick={toggleNowPlayingInformation} />
</div>
