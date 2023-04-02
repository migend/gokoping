import { it, describe, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia'
import { useCartStore } from '@/stores/cart'

describe('Cart Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should update cart to 3 products', () => {
    const cart = useCartStore()

    const products = [{
        id: '1',
        qty: 1,
        color: 'color1',
        size: 'size1',
      },
      {
        id: '2',
        qty: 1,
        color: 'color2',
        size: 'size2',
      },
      {
        id: '3',
        qty: 1,
        color: 'color3',
        size: 'size3',
      }]
    
    products.forEach((product) => {
      cart.addUpdateCart(product)
    })

    expect(cart.totalQty).toBe(3)
  })
})