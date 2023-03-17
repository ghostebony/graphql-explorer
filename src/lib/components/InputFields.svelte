<script lang="ts">
	import type { InputField as SchemaInputField } from '$lib/graphql/queries/schema';
	import type { InputField as TypeInputField } from '$lib/graphql/queries/type';
	import Description from './Description.svelte';
	import Details from './Details.svelte';
	import Fieldset from './Fieldset.svelte';
	import Type from './Type.svelte';

	export let inputFields: SchemaInputField[] | TypeInputField[] | null | undefined;
</script>

{#if inputFields}
	<Fieldset legend="Input Fields:" borderColor="#27c985">
		{#each inputFields as { name, description, type }}
			<Details summary={name}>
				<Description {description} />

				<Type {type} />
			</Details>
		{/each}
	</Fieldset>
{/if}
