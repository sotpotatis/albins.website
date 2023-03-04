<!-- HeadingButtons.svelte
The buttons in the heading that lead to different places (such as my GitHub)-->
<script>
	import Buttons from '../Buttons.svelte';
	import { openURL } from '../../libraries/util.js';
</script>

<Buttons
	buttons={[
		{
			textSize: 'text-xl',
			text: 'GitHub',
			icon: 'radix-icons:github-logo',
			color: 'black',
			onClick: () => {
				openURL('https://github.com/sotpotatis');
			}
		},
		{
			textSize: 'text-xl',
			text: 'Email',
			icon: 'mdi:email',
			color: 'blue',
			onClick: () => {
				openURL('mailto:albin@albins.website', false);
			}
		}
	]}
/>
