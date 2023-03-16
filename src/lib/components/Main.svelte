<script lang="ts">
	import type schemaQuery from '$lib/graphql/queries/schema';
	import type typeQuery from '$lib/graphql/queries/type';
	import Description from './Description.svelte';
	import EnumValues from './EnumValues.svelte';
	import Fields from './Fields.svelte';
	import InputFields from './InputFields.svelte';
	import PossibleTypes from './PossibleTypes.svelte';

	export let schema: Exclude<schemaQuery | typeQuery, null> | undefined;
</script>

{#if schema && schema['__type']}
	<Description description={schema['__type'].description} />

	<EnumValues enumValues={schema['__type'].enumValues} />

	<InputFields inputFields={schema['__type'].inputFields} />

	<PossibleTypes possibleTypes={schema['__type'].possibleTypes} />

	<Fields fields={schema['__type'].fields} />
{/if}
