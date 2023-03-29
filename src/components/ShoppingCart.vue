<script setup lang="ts">
const props = defineProps<{
	quantity: number,
}>()
</script>
<template>
	<div class="cart-container">
		<Icon name="cart"></Icon>
		<div v-if="quantity > 0" class="quantity-badge">
			{{ quantity }}
		</div>
	</div>
</template>

<style scoped>
.cart-container {
	position: relative;
}

.quantity-badge {
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	bottom: -0.9rem;
	right: -1rem;
	width: 1.8rem;
	height: 1.8rem;
	background: var(--red);
	border-radius: 100%;
	color: var(--white);
	font-size: 1.1rem;
	font-weight: 500;
}
</style>