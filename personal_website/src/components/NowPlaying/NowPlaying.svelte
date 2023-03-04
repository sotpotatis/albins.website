<!-- NowPlaying.svelte
A component showing what music I am currently playing, if any. -->
<script>
	import { onMount } from 'svelte';
	import TisselTasselAPIClient from '../../libraries/tisselTasselAPIClient.js';
	import NowPlaying from './NowPlaying.svelte';
	import NowPlayingData from './NowPlayingData.svelte';
	import NowPlayingIcon from './NowPlayingIcon.svelte';
	let nowPlaying = null; // Data for what is now playing
	export let allowTracksWithin = 30; // Used to consider recent tracks within X minutes as "recent"
	export let lastFMUsername = 'coolaalbin'; // Set which user to grab data from
	let detailsExpanded = false;
	function parseNowPlaying(apiResponse) {
		/** Function to parse what I am currently playing.
		 * This is a callback function for the "tisseltassel" API gateway (see https://github.com/sotpotatis/tisseltassel),
		 * which in turn requests data from the Last.FM API.
		 * @param apiResponse The response from the Last.FM API. */
		if (apiResponse === null) {
			// The client will return if the request failed
			nowPlaying = null;
		} else {
			console.log('Trying to figure out if something is currently playing...');
			// Get the most recent track I have been listening too
			const recentTracks = apiResponse.recenttracks.track;
			const mostRecentScrobble = recentTracks[0];
			let scrobbleDifferenceMinutes = null;
			/** There are two different scenarios here:
			 * 1. The track was recently played --> The track has a "date" attribute defined
			 * 2. The track is currently playing --> The track does not have a "date" attribute defined,
			 * but it has an "@attr".nowplaying attribute defined.
			 * Both of these scenarios are implemented because my main music service (Deezer) doesn't scrobble tracks as
			 * "now playing", but other platforms I sometimes listen to music on (Bandcamp etc.) have plugins that do.
			 */
			if (mostRecentScrobble.date !== undefined) {
				// Get current unix time and compare difference from when I listened to the track
				const currentTime = new Date().getTime();
				const scrobbleTime = mostRecentScrobble.date.uts * 1000;
				const scrobbleDifference = currentTime - scrobbleTime;
				scrobbleDifferenceMinutes = scrobbleDifference / 60000;
				console.log(`Time since I recently played music: ${scrobbleDifferenceMinutes} minutes.`);
			} else {
				if (
					mostRecentScrobble['@attr'] !== undefined &&
					mostRecentScrobble['@attr'].nowplaying !== undefined
				) {
					console.log('I am currently playing something.');
					scrobbleDifferenceMinutes = 0;
				}
			}
			if (scrobbleDifferenceMinutes !== null && scrobbleDifferenceMinutes < allowTracksWithin) {
				console.log('Found a recent track!', mostRecentScrobble);
				const artistName = mostRecentScrobble.artist['#text'];
				const albumName = mostRecentScrobble.album['#text'];
				nowPlaying = {
					track: {
						name: mostRecentScrobble.name,
						url: mostRecentScrobble.url,
						isLoved: mostRecentScrobble.loved === '1'
					},
					artist: {
						name: mostRecentScrobble.artist['#text'],
						url: encodeURI(`https://last.fm/artist/${artistName}`)
					},
					album: {
						name: mostRecentScrobble.album['#text'],
						url: encodeURI(`https://last.fm/artist/${artistName}/${albumName}`),
						coverURL: mostRecentScrobble.image[mostRecentScrobble.image.length - 1]['#text'] // (this should return the biggest available album cover)
					}
				};
			} else {
				console.log('Found no recent track.');
			}
		}
	}
	onMount(() => {
		console.log('Loading recently played music tracks...');
		const tisselTassel = new TisselTasselAPIClient(
			'https://albins-tisseltassel.netlify.app/api/tisseltassel'
		);
		// Try to access Last.FM to load my recently played tracks.
		tisselTassel.accessAPI(
			'lastFM',
			'user.getRecentTracks',
			{
				user: lastFMUsername
			},
			parseNowPlaying
		);
	});
</script>

<div>
	{#if nowPlaying !== null}
		<NowPlayingIcon
			toggleNowPlayingInformation={() => {
				detailsExpanded = !detailsExpanded;
			}}
		/>
		{#if detailsExpanded}
			<NowPlayingData
				trackURL={nowPlaying.track.url}
				trackName={nowPlaying.track.name}
				artistName={nowPlaying.artist.name}
				artistURL={nowPlaying.artist.url}
				albumName={nowPlaying.album.name}
				albumURL={nowPlaying.album.url}
				albumCoverURL={nowPlaying.album.coverURL}
				trackIsLoved={nowPlaying.track.isLoved}
				{lastFMUsername}
			/>
		{/if}
	{/if}
</div>
