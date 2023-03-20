<script lang="ts">
	import type { Arg as SchemaArg } from '$lib/graphql/queries/schema';
	import type { Arg as TypeArg } from '$lib/graphql/queries/type';
	import DefaultValue from './DefaultValue.svelte';
	import Description from './Description.svelte';
	import Details from './Details.svelte';
	import Type from './Type.svelte';

	export let arg: SchemaArg | TypeArg;
</script>

<Details summary={arg.name}>
	<Description description={arg.description} />

	<DefaultValue defaultValue={arg.defaultValue} />

	<Type type={arg.type} />
</Details>
