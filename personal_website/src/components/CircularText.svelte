<!-- CircularText.svelte
A text component which is circular text with support for an image
inside of it. -->
<script>
	import { onMount } from 'svelte';
	import CircleType from 'circletype';
	export let text;
	export let textColor = 'text-white';
	export let id;
	export let backgroundImage = null;
	// Initialize circular text on mount
	onMount(() => {
		const circleType = new CircleType(document.getElementById(id));
		console.log('Spinning text initialized.');
		const spinningTextWrapper = document.getElementById(`${id}-wrapper`);
		spinningTextWrapper.style.width = `${circleType.radius() * 2}px`;
	});
</script>

<div class="min-w-full min-h-full flex justify-center">
	<div
		id="{id}-wrapper"
		class="rounded-full z-0 bg-origin-content bg-cover bg-no-repeat bg-center shrink-0"
		style={backgroundImage !== null ? `background-image: url('${backgroundImage}')` : ''}
	>
		<h1 {id} class="animate-spin-slow text-xl z-10 {textColor}">
			{text}
		</h1>
	</div>
</div>
