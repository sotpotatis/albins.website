<!-- TechnologyIcon.svelte
Exposes an easier way to showcase technology that I'm using.
<Icon icon="logos:python" id="..." tooltip="Python" on:click={()=>{openURL("https://python.org/")}}/> =>
<TechnologyIcon type="python"/>
-->
<script>
	import Icon from '../Icon.svelte';
	import { openURL } from '../../libraries/util.js';
	import technologyIcons from '../../content/technologyIcons.js';
	export let type; // Programming language / technology ID
	export let size = 'normal'; // Icon size
	export let fullSize = false;
	let iconData = technologyIcons[type]; // Get data for this icon
</script>

<Icon
	icon={iconData.icon}
	tooltip={iconData.tooltip}
	{fullSize}
	{size}
	onClick={() => {
		openURL(iconData.url);
	}}
/>
