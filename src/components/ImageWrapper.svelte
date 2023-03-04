<!-- ImageWrapper.svelte
A responsive image wrapper with caption support.
-->
<script>
	export let source; // The source of the image.
	export let alt; // The alt text of the image.
	export let caption = null; // The caption of the image (if any).
</script>

<div class="p-3 max-w-full max-h-full">
	<img src={source} {alt} class="object-cover" />
	{#if caption !== null}
		<p class="text-gray-500 dark:text-gray-400">{caption}</p>
	{/if}
</div>
