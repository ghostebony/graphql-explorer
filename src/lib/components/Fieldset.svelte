<script lang="ts">
	export let legend: string;

	export let borderColor: string;
</script>

<fieldset style:border-color={borderColor}>
	<legend>{legend}</legend>

	<slot />
</fieldset>

<style>
	fieldset {
		margin-top: 25px;
	}
</style>
