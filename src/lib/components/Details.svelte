<script lang="ts">
	export let summary: string;

	export let isDeprecated: boolean = false;

	let open: boolean;
</script>

<details bind:open>
	<summary style:cursor="pointer" style:color={isDeprecated ? 'red' : 'inherit'}>
		{summary}
	</summary>

	{#if open}
		<slot />
	{/if}
</details>

<style>
	details {
		margin-top: 15px;
	}
</style>
