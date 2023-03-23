<script lang="ts">
	import Fieldset from './Fieldset.svelte';

	export let kind: string | null;
</script>

{#if kind}
	<Fieldset legend="Kind:" borderColor="#d568dd">
		<p>
			{kind}
		</p>
	</Fieldset>
{/if}
