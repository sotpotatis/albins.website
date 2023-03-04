<!-- NowPlayingAlbumCover.svelte
An album cover for the now playing information card.
-->
<script>
	export let imageUrl; // The album image URL
	export let name; // The album name
	export let artist; // The album artist.
</script>

<div class="hidden md:block">
	<!-- Album cover image -->
	<img class="h-24 object-contain" src={imageUrl} alt="Album cover of {name} by {artist}" />
</div>
