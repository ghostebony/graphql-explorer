<script lang="ts">
	import type {
		InputValue as SchemaInputValue,
		Type as SchemaType,
		FullType as SchemaFullType
	} from '$lib/graphql/queries/schema';
	import type { InputField as TypeInputField, Type as TypeType } from '$lib/graphql/queries/type';
	import Description from './Description.svelte';
	import EnumValues from './EnumValues.svelte';
	import Fields from './Fields.svelte';
	import Fieldset from './Fieldset.svelte';
	import InputFields from './InputFields.svelte';
	import Kind from './Kind.svelte';
	import Name from './Name.svelte';
	import OfType from './OfType.svelte';

	export let type:
		| SchemaType
		| TypeType
		| SchemaFullType
		| SchemaInputValue['type']
		| TypeInputField['type']
		| undefined;
</script>

{#if type}
	<Fieldset legend="Type:" borderColor="#400ab2">
		<Name name={type.name} />

		<Kind kind={type.kind} />

		{#if 'description' in type}
			<Description description={type.description} />
		{/if}

		{#if 'fields' in type}
			<Fields fields={type.fields} />
		{/if}

		{#if 'inputFields' in type}
			<InputFields inputFields={type.inputFields} />
		{/if}

		{#if 'enumValues' in type}
			<EnumValues enumValues={type.enumValues} />
		{/if}

		{#if 'ofType' in type}
			<OfType ofType={type.ofType} />
		{/if}
	</Fieldset>
{/if}
