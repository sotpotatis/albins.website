<!-- Body.svelte
The page body contains a list of my projects through a new, innovative format
that popped out of my head. -->
<script>
	import ProjectsTexts from '../components/ProjectText/ProjectsTexts.svelte';
	import ProjectInformation from '../components/ProjectInformation/ProjectInformation.svelte';
	import { projectPickedEventName } from '../libraries/projectsPicker.js';
	import { onMount } from 'svelte';
	import projectsContent from '../content/projectsContent.js';
	import { passClassList } from '../libraries/util.js';
	// Handle the project picker.
	// When a link to show an open project is clicked, we want to open a sidebar which contains some content
	// about the project. For this, I implemented a custom event.
	export let activeProject = null;
	onMount(() => {
		console.log('Subscribing to project pick events...');
		document.addEventListener(projectPickedEventName, (event) => {
			activeProject = projectsContent[event.detail];
		});
	});
	// Base classes used in the project
	// This is used so that on mobile, the project information view takes up the whole screen
	// without the text being visible underneath. The check is done below, see below.
	const baseClasses = 'col-span-3 md:col-span-2';
</script>

<main
	id="body"
	class="relative bg-gray-100 dark:bg-gray-700 drop-shadow-2xl grid grid-flow-col auto-cols-auto gap-x-12 justify-center text-center py-6 px-8 md:px-24 z-10"
>
	<div class={activeProject === null ? { baseClasses } : `${baseClasses} hidden md:block`}>
		<ProjectsTexts />
	</div>
	<div class="absolute top-0 md:static">
		{#if activeProject !== null}
			<ProjectInformation
				title={activeProject.title}
				contentData={activeProject.contentBlocks}
				icons={activeProject.icons}
				onCloseButton={() => {
					activeProject = null;
				}}
			/>
		{/if}
	</div>
</main>
