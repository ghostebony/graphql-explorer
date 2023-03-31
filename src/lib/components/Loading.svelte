<script lang="ts">
	export let loading: boolean = false;
</script>

{#if loading}
	<div style:margin-top="15px" style:margin-bottom="5px">
		<span>Loading...</span>
	</div>
{/if}
