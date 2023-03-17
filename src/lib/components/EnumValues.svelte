<script lang="ts">
	import type { EnumValue as SchemaEnumValue } from '$lib/graphql/queries/schema';
	import type { EnumValue as TypeEnumValue } from '$lib/graphql/queries/type';
	import Description from './Description.svelte';
	import Details from './Details.svelte';
	import Fieldset from './Fieldset.svelte';

	export let enumValues: SchemaEnumValue[] | TypeEnumValue[] | null | undefined;
</script>

{#if enumValues}
	<Fieldset legend="Enum Values:" borderColor="#19bcaa">
		{#each enumValues as { name, description }}
			<Details summary={name}>
				<Description {description} />
			</Details>
		{/each}
	</Fieldset>
{/if}
