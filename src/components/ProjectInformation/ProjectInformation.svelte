<!-- ProjectInformation.svelte
The ProjectInformation component renders information about a project.
It supports a variety of blocks. -->
<script>
	// Import components that can be used when rendering rich text
	import Heading from '../Heading/Heading.svelte';
	import Button from '../Button.svelte';
	import Paragraph from '../Paragraph.svelte';
	import ImageWrapper from '../ImageWrapper.svelte';
	import Buttons from '../Buttons.svelte';
	import List from '../List.svelte';
	const contentBlockTypeToComponent = {
		heading: Heading,
		button: Button,
		buttons: Buttons,
		paragraph: Paragraph,
		image: ImageWrapper,
		list: List
	};
	import ProjectInformationTitle from './ProjectInformationTitle.svelte';
	import { passClassList } from '../../libraries/util.js';

	export let title; // Title of the project information page
	export let contentData; // A list of data entries that include components to render.
	export let icons; // A list of technology icons that should be included
	export let onCloseButton; // Function to run when the information view is closed
	const rootElementClasses = [
		'bg-gray-200',
		'dark:bg-gray-600',
		'flex',
		'flex-col',
		'text-left',
		'gap-y-6',
		'overflow-scroll',
		'md:max-h-screen'
	];
</script>

<div class={passClassList(rootElementClasses)}>
	<ProjectInformationTitle text={title} {onCloseButton} {icons} />
	<div class="p-6 grow shrink-0 md:shrink">
		{#each contentData as contentBlock}
			<svelte:component
				this={contentBlockTypeToComponent[contentBlock.type]}
				{...contentBlock.attributes}
			/>
		{/each}
	</div>
</div>
