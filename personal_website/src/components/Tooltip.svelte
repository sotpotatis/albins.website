<!-- Tooltip.old.svelte
Renders a tooltip using the library Popper.js. -->
<script>
	export let text; // Tooltip text.
	export let popperContent; // Content action reference, see https://www.npmjs.com/package/svelte-popperjs for context
</script>

<div class="tooltip" use:popperContent>
	{text}
</div>
