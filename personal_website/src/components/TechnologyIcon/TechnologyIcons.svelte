<!-- TechnologyIcons
Allows you to easily pass a list of TechnologyIcon to render.-->
<script>
	import TechnologyIcon from './TechnologyIcon.svelte';
	export let icons; // List of icon types
	export let size = 'normal'; // Icon size
	export let fullSize = true; // Whether icons should be rendered full size or not. See the Icons component for more information.
</script>

<div
	class="grid grid-flow-col auto-cols-fr max-w-fit grid-rows-2 md:grid-rows-1 gap-x-8 gap-y-8 shrink-0"
>
	{#each icons as icon}
		<TechnologyIcon type={icon} {size} {fullSize} />
	{/each}
</div>
