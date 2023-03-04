<!-- NowPlayingData.svelte
An informational box showing what music I am currently playing.-->
<script>
	import NowPlayingAlbumCover from './NowPlayingAlbumCover.svelte';
	import NowPlayingTrackInformation from './NowPlayingTrackInformation.svelte';
	// Username associated with the data
	export let lastFMUsername;
	// Data related to the currently playing item
	export let artistName;
	export let artistURL;
	export let trackName;
	export let trackURL;
	export let albumName;
	export let albumCoverURL;
	export let albumURL;
	export let trackTags;
	export let trackIsLoved;
</script>

<div
	class="bg-gray-200 dark:bg-gray-600 dark:text-white border-2 max-h-full max-w-full border-gray-400 dark:border-gray-500 rounded-lg py-3 px-3 box-shadow-lg text-gray-500 text-left"
>
	<div class="grid grid-cols-1 md:grid-cols-3 gap-x-4">
		<NowPlayingAlbumCover artist={artistName} name={albumName} imageUrl={albumCoverURL} />
		<NowPlayingTrackInformation
			{albumName}
			{albumURL}
			{artistName}
			{artistURL}
			{trackName}
			{trackURL}
			isLoved={trackIsLoved}
			{lastFMUsername}
		/>
	</div>
</div>
