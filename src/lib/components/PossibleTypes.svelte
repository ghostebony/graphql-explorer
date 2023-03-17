<script lang="ts">
	import type { Type as SchemaType } from '$lib/graphql/queries/schema';
	import type { Type as TypeType } from '$lib/graphql/queries/type';
	import Fieldset from './Fieldset.svelte';
	import Type from './Type.svelte';

	export let possibleTypes: SchemaType[] | TypeType[] | null | undefined;
</script>

{#if possibleTypes}
	<Fieldset legend="Possible Types:" borderColor="#9a493b">
		{#each possibleTypes as type}
			<Type {type} />
		{/each}
	</Fieldset>
{/if}
