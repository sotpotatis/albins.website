<!-- ProjectInformationTitle.svelte
Title of the project information page. -->
<script>
	import Icon from '@iconify/svelte';
	import Heading from '../Heading/Heading.svelte';
	import TechnologyIcons from '../TechnologyIcon/TechnologyIcons.svelte';
	export let text; // Title text
	export let icons; // A list of technology icons that should be included
	export let onCloseButton; // An action to trigger when the close button was clicked.
</script>

<div class="bg-gray-500 dark:bg-gray-800 flex flex-row p-3 justify-between sticky top-0">
	<div class="flex flex-row items-center gap-x-6">
		<Heading size="h2" {text} />
		<TechnologyIcons {icons} fullSize={true} />
	</div>
	<button class="bg-none" on:click={onCloseButton}><Icon icon="ion:close" class="text-xl" /></button
	>
</div>
