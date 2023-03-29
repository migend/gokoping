import { defineStore } from 'pinia'
import type { ProductCart } from '@/types/cart'

export const useCartStore = defineStore('cart', () => {
  const cart = $ref<ProductCart[]>([])
  
  const addUpdateCart = (product: ProductCart) => {
    const location = cart.findIndex(cartProduct => cartProduct.id === product.id)
    if (location > -1) { 
      cart.splice(location, 1, product)
      return
    }
    cart.push(product)
  }

  const removeFromCart = (product: ProductCart) => {
    const location = cart.findIndex(cartProduct => cartProduct.id === product.id)
    cart.splice(location, 1)
  }

  const totalQty = $computed(() => cart.reduce((acc, cur) => {
    acc += cur.qty
    return acc
  }, 0))

  return $$({
    addUpdateCart,
    removeFromCart,
    totalQty
  })
})

