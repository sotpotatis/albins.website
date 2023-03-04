<script>
	import Copyright from '../components/Copyright.svelte';
</script>

<div id="footer" class="text-center text-gray-400 dark:text-gray-500 py-6">
	<Copyright name="Albin" startYear={2023} />
	<p class="text-sm">
		Received an email from me? You can validate my PGP key <a
			class="underline"
			href="/publickey.albin@albins.website-a76d34fd987e24eb23064d20ca40e3050d115fc3.asc"
			target="_blank">here</a
		>
		and
		<a
			class="underline"
			href="https://keys.openpgp.org/search?q=albin@albins.website"
			target="_blank">here</a
		>.
	</p>
</div>
