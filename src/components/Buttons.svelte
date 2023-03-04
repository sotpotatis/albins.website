<!-- Buttons.svelte
You guessed it - includes multiple buttons next to each other! -->
<script>
	import Button from './Button.svelte';
	export let buttons;
</script>

<div class="flex flex-row">
	{#each buttons as button}
		<Button {...button} />
	{/each}
</div>
