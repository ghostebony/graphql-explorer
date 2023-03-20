<script lang="ts">
	import Fieldset from './Fieldset.svelte';

	export let defaultValue: unknown | null;
</script>

{#if defaultValue}
	<Fieldset legend="Default Value:" borderColor="#3a0e12">
		<p>
			{defaultValue}
		</p>
	</Fieldset>
{/if}
