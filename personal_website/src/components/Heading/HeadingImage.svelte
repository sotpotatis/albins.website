<!-- HeadingImage.svelte
The first thing you see on the website: an image of me with spinning text
around it. Also includes information of my currently playing music track if any. -->
<script>
	import CircularText from '../CircularText.svelte';
	import NowPlaying from '../NowPlaying/NowPlaying.svelte';
</script>

<div class="max-w-full">
	<CircularText
		text="albin seijmer &middot; developer &middot; python &middot; javascript &middot; c# -"
		id="header-spinning-text"
		backgroundImage="/me.png"
	/>
	<NowPlaying />
</div>
