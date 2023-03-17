<script lang="ts">
	import type { Field as SchemaField } from '$lib/graphql/queries/schema';
	import type { Field as TypeField } from '$lib/graphql/queries/type';
	import Args from './Args.svelte';
	import Deprecated from './Deprecated.svelte';
	import Description from './Description.svelte';
	import Details from './Details.svelte';
	import Fieldset from './Fieldset.svelte';
	import Type from './Type.svelte';

	export let fields: SchemaField[] | TypeField[] | null | undefined;
</script>

{#if fields}
	<Fieldset legend="Fields:" borderColor="#7712b0">
		{#each fields as { name, type, description, isDeprecated, deprecationReason, args }}
			<Details summary={name} {isDeprecated}>
				<Deprecated {isDeprecated} {deprecationReason} />

				<Description {description} />

				<Args {args} />

				<Type {type} />
			</Details>
		{/each}
	</Fieldset>
{/if}
