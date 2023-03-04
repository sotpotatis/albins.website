<!-- ProjectTexts.svelte
Renders a list of my projects through a new, innovative format
that popped out of my head. -->
<script>
	import projectsTexts from '../../content/projectsTexts.js';
	import ProjectText from './ProjectText.svelte';
</script>

<div class="break-words leading-[3.5em]">
	{#each projectsTexts as projectsText, index}
		<ProjectText
			text={projectsText.content}
			associatedProject={projectsText.associatedProject}
			isLast={index + 1 === projectsTexts.length ||
				projectsTexts[index + 1].associatedProject === null}
		/>
	{/each}
</div>
