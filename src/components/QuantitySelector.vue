<script setup lang="ts">
const props = defineProps<{
	modelValue?: number
}>()

const emit = defineEmits<{
    (_event: 'update:modelValue', _value: number): void,
}>()

const decreaseQuantity = () => {
	if (!props?.modelValue || props.modelValue <= 1) return
	emit('update:modelValue', props.modelValue - 1)
}

const increaseQuantity = () => {
	if (!props?.modelValue || props.modelValue >= 100) return
	emit('update:modelValue', props.modelValue + 1)
}
</script>

<template>
	<div class="quantity-selector--container">
		<button @click="decreaseQuantity">-</button>
		<span>{{ props?.modelValue ?? 1 }}</span>
		<button @click="increaseQuantity">+</button>
	</div>
</template>

<style scoped>
	.quantity-selector--container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: var(--white-soft);
		padding: 1.2rem;
		width: 100%;
		max-width: 10rem;
	}

	button {
		color: var(--gray);
		font-weight: 500;
		cursor: pointer;
	}

	span {
		display: flex;
		font-weight: 500;
	}
</style>