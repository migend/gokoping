<script setup lang="ts">
const props = defineProps<{
	data: Record<string, string>
}>()


</script>

<template>
	<div class="product-options--info">
		<div v-for="[key, value] in Object.entries(props.data)" class="info-property">
			<span class="info-key">{{ key }}</span>
			<span class="info-value">{{ value }}</span>
		</div>
	</div>
</template>

<style scoped>
.product-options--info {
	display: flex;
	flex-direction: column;
	margin-top: 6rem;
}

.info-property {
	display: flex;
	align-items: center;
	justify-content: left;
	margin-bottom: 3rem;
}

.info-property:last-child {
	margin-bottom: 0;
}

.info-key {
	width: 100%;
	font-weight: 500;
	text-transform: uppercase;
}

.info-value {
	width: 100%;
	color: var(--gray);
}
</style>