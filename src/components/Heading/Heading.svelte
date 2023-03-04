<!-- Heading.svelte
A heading with customizable sizes.
Used inside the project information wrapper. -->
<script>
	import { passClassList } from '../../libraries/util.js';
	import Icon from '@iconify/svelte';
	export let size; // h1-h6
	export let icon = null;
	const baseClasses = ['font-bold', 'flex', 'flex-row', 'gap-x-4'];
	const sizeToClasses = {
		h1: [...baseClasses, 'text-3xl'],
		h2: [...baseClasses, 'text-2xl'],
		h3: [...baseClasses, 'text-xl'],
		h4: [...baseClasses, 'text-lg'],
		h5: [...baseClasses, 'text-lg text-gray-800'],
		h6: [...baseClasses]
	};
	export let text; // The text inside the heading
</script>

<svelte:element this={size} class={passClassList(sizeToClasses[size])}>
	{#if icon !== null}
		<Icon {icon} class="w-full h-full" />
	{/if}
	{text}
</svelte:element>
