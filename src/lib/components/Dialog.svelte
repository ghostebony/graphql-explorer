<script lang="ts">
	import type typeQuery from '$lib/graphql/queries/type';
	import { openedDialogs } from '$lib/stores';
	import Main from './Main.svelte';

	export let schema: typeQuery;

	export let dialog: HTMLDialogElement;
</script>

<dialog
	style:width="100%"
	style:height="100%"
	bind:this={dialog}
	on:close={() => openedDialogs.close(schema)}
>
	<div style:position="fixed" style:right="40px">
		<button
			style:cursor="pointer"
			on:click={() => {
				dialog.close();
			}}
		>
			CLOSE
		</button>
	</div>

	<Main {schema} />
</dialog>
