<script lang="ts">
	import type typeQuery from '$lib/graphql/queries/type';
	import { data, openedDialogs } from '$lib/stores';
	import { request } from '$lib/utils';
	import Dialog from './Dialog.svelte';

	export let name: string | null;

	export let loading: boolean = false;

	let dialogContent: typeQuery;
	let dialog: HTMLDialogElement;
</script>

{#if name}
	{#if name}
		<button
			style:cursor="pointer"
			disabled={!$data.current || !name}
			on:click={async () => {
				if ($data.current && name) {
					if (name) {
						loading = true;

						dialogContent = await request(`/type/${name}`, $data);

						dialog.showModal();
						openedDialogs.open(dialogContent);

						loading = false;

						data.addType(name);
					}
				}
			}}
		>
		</button>
	{/if}

	<Dialog schema={dialogContent} bind:dialog />
{/if}
