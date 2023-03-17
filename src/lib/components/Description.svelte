<script lang="ts">
	import Fieldset from './Fieldset.svelte';

	export let description: string | null | undefined;
</script>

{#if description}
	<Fieldset legend="Description:" borderColor="#446d66">
		<p style:white-space="pre-wrap">
			{description}
		</p>
	</Fieldset>
{/if}
