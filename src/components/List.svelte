<!-- List.svelte
A HTML list but exposed in a more Svelte-like format. -->
<script>
	export let entries; // A text list of list items/entries
	export let type = 'bullet'; // List type
	const listTypeToClass = {
		bullet: 'list-disc',
		numbered: 'list-decimal',
		no_symbols: 'list-none'
	};
</script>

<ul class={listTypeToClass[type]}>
	{#each entries as entry}
		<li>{entry}</li>
	{/each}
</ul>
