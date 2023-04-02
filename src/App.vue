<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
const { totalQty } = $(useCartStore())

</script>
<template>
  <TheHeader :quantity="totalQty" />
  <main>
    <RouterView />
  </main>
  <TheFooter />
</template>

<style scoped>
main {
	display: flex;
	width: 100%;
	justify-content: center;
}

@media only screen and (min-width: 576px) {
	main {
		margin-top: 7rem;
	}
}
</style>
