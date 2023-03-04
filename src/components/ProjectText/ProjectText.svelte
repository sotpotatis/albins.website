<!-- ProjectText.svelte
One of the main selling points of this website is having a lot of text elements
that together make a readable text. When you click on some text elements, they will open
a view with content to explain more about a certain project I made.
This component is for that text, but also for unclickable text that is there to fill it out. -->
<script>
	import { passClassList } from '../../libraries/util.js';
	import { announceProjectPicked } from '../../libraries/projectsPicker.js';
	export let text; //Text content
	export let associatedProject; // The ID of the associated project
	export let isLast = false;
	const isProjectLink = associatedProject !== null; //Whether this text entry is a project link or not
	// Decide styles to use
	const baseStyles = ['text-4xl', 'font-bold'];
	const projectLinkStyles = [
		...baseStyles,
		'underline',
		'text-transparent',
		'bg-gradient-to-r',
		'from-cyan-400',
		'dark:from-cyan-500',
		'bg-clip-text',
		'to-blue-400',
		'dark:to-blue-500',
		'border-b-2',
		'border-cyan-200'
	];
	const nonProjectLinkStyles = [...baseStyles, 'text-gray-700 dark:text-gray-200', 'bg-none'];
	const stylesToUse = isProjectLink ? projectLinkStyles : nonProjectLinkStyles;
	// Onclick function
	const handleOnClick = (event) => {
		console.log('Project link clicked! Announcing...');
		announceProjectPicked(associatedProject);
	};
</script>

<span
	class={passClassList(stylesToUse)}
	on:click={handleOnClick}
	role={isProjectLink ? 'button' : null}
	>{text}
</span>
<!-- Add delimiter to end of string -->
{#if !isLast && isProjectLink}
	<span class={passClassList(nonProjectLinkStyles)}>, </span>
{/if}
