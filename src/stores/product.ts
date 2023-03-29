import { defineStore } from 'pinia'
import type { CatalogEntryView } from '@/types/product'
import product from '@/assets/product.json'

// fake request with 3s of duration
const request = new Promise<CatalogEntryView>((resolve) => { 
  setTimeout(() => {
    resolve(product.data[0].catalogEntryView[0])
  }, 3000)
})

export const useProductStore = defineStore('product', () => {
	let loading = $ref<boolean>(false)
	let product = $ref<CatalogEntryView | null>(null)

	const loadProduct = async () => {
		loading = true
		product = await request
		loading = false
	}

	return $$({ loadProduct, product, loading })
})