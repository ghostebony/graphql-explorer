<script lang="ts">
	import type { Arg as SchemaArg } from '$lib/graphql/queries/schema';
	import type { Arg as TypeArg } from '$lib/graphql/queries/type';
	import Arg from './Arg.svelte';
	import Fieldset from './Fieldset.svelte';

	export let args: SchemaArg[] | TypeArg[];
</script>

{#if args.length > 0}
	<Fieldset legend="Args:" borderColor="#2ad98c">
		{#each args as arg}
			<Arg {arg} />
		{/each}
	</Fieldset>
{/if}
