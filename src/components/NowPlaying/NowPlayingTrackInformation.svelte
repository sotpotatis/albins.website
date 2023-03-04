<!-- NowPlayingTrackInformation.svelte
Contains information about what current track I am playing for the
NowPlayingData component. -->
<script>
	import Icon from '../Icon.svelte';
	import { openURL } from '../../libraries/util.js';
	// Username associated with the data
	export let lastFMUsername;
	// Data for the currently playing track
	export let trackURL;
	export let trackName;
	export let isLoved;
	// Data for the currently playing artist
	export let artistURL;
	export let artistName;
	// Data for the currently playing album
	export let albumURL;
	export let albumName;
</script>

<div class="col-span-2">
	<div class="flex flex-row justify-between items-center">
		<p class="font-bold py-2">Currently listening to</p>
		<!-- Last.FM logo -->
		<span class="hidden md:block text-[#ba0000]">
			<Icon
				icon="fa-brands:lastfm-square"
				onClick={() => {
					openURL(`https://last.fm/user/${lastFMUsername}`);
				}}
			/>
		</span>
	</div>
	<hr class="w-full border-1 border-gray-400" />
	<!-- Track name -->
	{#if trackName !== undefined}
		<h3 class="text-lg font-bold flex flex-row gap-x-4">
			{#if isLoved}
				<Icon icon="mdi:cards-heart" fullSize={true} tooltip="Favorite track" />
			{/if}
			<a href={trackURL} class="hover:underline">{trackName}</a>
		</h3>
	{/if}
	<!-- Artist name -->
	{#if artistName !== undefined}
		<h4>
			by <a class="font-bold hover:underline" href={artistURL}>{artistName}</a>
		</h4>
	{/if}
	<!-- Album name -->
	{#if albumName !== undefined}
		<h4>
			on <a class="font-bold hover:underline" href={albumURL}>{albumName}</a>
		</h4>
	{/if}
</div>
