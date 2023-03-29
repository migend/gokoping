<script setup lang="ts">
</script>

<template>
	<div>
		<Icon name="checked" :size="16" class="green" />
		<span class="label green">In stock</span>
	</div>
</template>

<style scoped>
div {
	display: flex;
	align-items: center;
}
.green {
	color: var(--green);
}

.label {
	font-size: 1.3rem;
	font-weight: 500;
	margin-left: 1rem;
	font-style: italic;
}

</style>