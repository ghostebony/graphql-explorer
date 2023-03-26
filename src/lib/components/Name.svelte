<script lang="ts">
	import ButtonFetchType from './ButtonFetchType.svelte';
	import Fieldset from './Fieldset.svelte';

	export let name: string | null;
</script>

{#if name}
	<Fieldset legend="Name:" borderColor="#48c066">
		<ButtonFetchType {name} />
	</Fieldset>
{/if}
