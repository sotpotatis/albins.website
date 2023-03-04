<!-- Copyright.svelte
 A copyright symbol that keep track of the current year. -->
<script>
	export let startYear; // Start year for the copyright count
	export let name; // Name of copyright holder
	const currentYear = new Date().getFullYear();
</script>

<p>
	Copyright © {name}
	{#if startYear === currentYear}
		{currentYear}
	{:else}
		{startYear}-{currentYear}
	{/if}
</p>
