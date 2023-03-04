<!-- Tooltip.old.svelte
Renders a tooltip using the library Popper.js.
NOTE: This file was a somewhat hacky attempt to try to use Popper.js core integration.
See Tooltip.svelte for a much cleaner and newer approach. -->
<script>
	import { onMount } from 'svelte';
	import { createPopper } from '@popperjs/core';
	import { passClassList } from '../libraries/util.js';
	export let text;
	export let targetElementId; // ID of the target element to add a tooltip above.
	export let position = 'auto'; // Position of the tooltip
	const tooltipWrapperId = `${targetElementId}-tooltip`;
	const tooltipArrowId = `${tooltipWrapperId}-arrow`;
	let show = false;
	// These will be initialized later
	let targetElement = null;
	let tooltipElement = null;
	let tooltip = null;
	// Create functions for hiding and showing the tooltip
	function toggleTooltip() {
		show = !show;
	}
	onMount(() => {
		console.log(`Initializing tooltip on ${targetElementId}...`);
		// Get elements
		targetElement = document.getElementById(targetElementId);
		tooltipElement = document.getElementById(tooltipWrapperId);
		// Create the tooltip
		tooltip = createPopper(targetElement, tooltipElement, {
			placement: position,
			modifiers: [
				{
					name: 'arrow',
					options: {
						element: `#${tooltipArrowId}`
					}
				}
			]
		});
		// Add aria labels
		targetElement.setAttribute('aria-describedby', tooltipWrapperId);
		// Add mouseover listener to root for hover effect
		targetElement.addEventListener('mouseenter', toggleTooltip);
		targetElement.addEventListener('mouseleave', toggleTooltip);
	});
</script>

<div id={tooltipWrapperId} role="tooltip" class={show ? 'tooltip' : 'tooltip hidden'}>
	{text}
	<!-- Tooltip arrow -->
</div>
