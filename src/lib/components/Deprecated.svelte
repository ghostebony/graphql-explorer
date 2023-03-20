<script lang="ts">
	export let isDeprecated: boolean;
	export let deprecationReason: string | null;
</script>

{#if isDeprecated && deprecationReason}
	<p style:white-space="pre-wrap" style:color={isDeprecated ? 'red' : 'inherit'}>
		{deprecationReason}
	</p>
{/if}
