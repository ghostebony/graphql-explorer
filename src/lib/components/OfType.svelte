<script lang="ts">
	import type {
		InputField as SchemaInputField,
		Type as SchemaType,
		__Type as Schema__Type
	} from '$lib/graphql/queries/schema';
	import type { InputField as TypeInputField, Type as TypeType } from '$lib/graphql/queries/type';
	import Description from './Description.svelte';
	import EnumValues from './EnumValues.svelte';
	import Fields from './Fields.svelte';
	import Fieldset from './Fieldset.svelte';
	import InputFields from './InputFields.svelte';
	import Kind from './Kind.svelte';
	import Name from './Name.svelte';

	export let ofType:
		| SchemaType['ofType']
		| TypeType['ofType']
		| Schema__Type['ofType']
		| SchemaInputField['type']['ofType']
		| TypeInputField['type']['ofType']
		| undefined;
</script>

{#if ofType}
	<Fieldset legend="Of Type:" borderColor="#e87c43">
		<Name name={ofType.name} />

		<Kind kind={ofType.kind} />

		{#if 'description' in ofType}
			<Description description={ofType.description} />
		{/if}

		{#if 'fields' in ofType}
			<Fields fields={ofType.fields} />
		{/if}

		{#if 'inputFields' in ofType}
			<InputFields inputFields={ofType.inputFields} />
		{/if}

		{#if 'enumValues' in ofType}
			<EnumValues enumValues={ofType.enumValues} />
		{/if}

		{#if 'ofType' in ofType && ofType.ofType}
			<svelte:self ofType={ofType.ofType} />
		{/if}
	</Fieldset>
{/if}
