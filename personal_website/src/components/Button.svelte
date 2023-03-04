<!-- Button.svelte
A customizable, pre-styled button. -->
<script>
	import { passClassList } from '../libraries/util.js';
	import Icon from './Icon.svelte';
	export let text;
	export let textSize = 'text-base';
	export let color = 'blue';
	export let onClick = null;
	export let icon = null; // Any icon to include in the button
	const baseClasses = [
		'bg-gradient-to-br',
		'px-3',
		'py-1',
		'my-3',
		'border-2',
		'max-h-min',
		'border-gray-300',
		'dark:border-gray-800',
		'rounded-xl',
		'text-white',
		'font-bold',
		'flex',
		'flex-row',
		'items-center',
		'gap-x-4',
		textSize
	];
	const buttonColors = {
		// Mappings: button colors to classes
		green: [...baseClasses, 'from-green-500 to-green-800'],
		blue: [...baseClasses, 'from-blue-800 to-cyan-600'],
		black: [...baseClasses, 'from-gray-800 to-black']
	};
</script>

<button class={passClassList(buttonColors[color])} on:click={onClick}>
	{#if icon !== null}
		<Icon {icon} fullSize={true} />
	{/if}
	{text}
</button>
