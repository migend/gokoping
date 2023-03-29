<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
const { totalQty } = $(useCartStore())

</script>
<template>
  <TheHeader :quantity="totalQty" />
  <RouterView />
  <TheFooter />
</template>
