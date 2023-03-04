<!-- Icon.svelte
An icon using the library Iconify, but the deal here is that the icon
supports tooltips and captions.
-->
<script>
	import Icon from '@iconify/svelte';
	import Tooltip from './Tooltip.svelte';
	import { createPopperActions } from 'svelte-popperjs';
	import { passClassList } from '../libraries/util.js';
	const [popperRef, popperContent] = createPopperActions();
	export let icon;
	export let fullSize = false; // Apply w-full and h-full
	export let id;
	export let tooltip = null;
	export let onClick = null; // Action on click
	export let size = 'normal'; // Icon size (text size)
	const iconSizes = {
		big: 'text-lg md:text-2xl',
		normal: 'md:text-lg',
		small: 'text-sm'
	}; // Mapping of available sizes --> class to use
	const tooltipIsSpecified = tooltip !== null;
	let showTooltip = false;
	let iconClassList = [iconSizes[size]];
	if (fullSize) {
		iconClassList.push(...['w-full', 'h-full']);
	}
</script>

<div
	use:popperRef
	on:mouseenter={() => (showTooltip = true)}
	on:mouseleave={() => (showTooltip = false)}
	on:click={onClick !== null ? onClick : null}
	role={tooltipIsSpecified || onClick !== null ? 'button' : 'img'}
>
	<Icon {id} {icon} class={passClassList(iconClassList)} />
	{#if tooltipIsSpecified && showTooltip}
		<Tooltip {popperContent} text={tooltip} />
	{/if}
</div>
