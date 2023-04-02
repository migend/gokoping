<script setup lang="ts">
import { watch } from 'vue';
import { useProductStore } from '@/stores/product'
import { useCartStore } from '@/stores/cart'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import "vue3-carousel/dist/carousel.css"

const { loadProduct, product, loading } = $(useProductStore())
const { addUpdateCart } = $(useCartStore())

loadProduct()

const carouselData = $computed<string[] | null>(() => product?.attachments.map(item => item.attachmentAssetPath) ?? null)
const colors = $computed<string[]>(() => product?.otherVariants.map(v => v.color) as string[])

const sizes = $computed<string[]>(() => product?.sizeCodes.map(size => size.value) as string[])

let selectedQty = $ref<number>(1)
let selectedColor = $ref<string>('')
let selectedSize = $ref<string>('')

const productInfo = {
	sku: 'M107-B',
	category: 'Women/ T- Shirt',
}

watch(([
		() => colors,
		() => sizes
	]),
	() => {
		if (sizes && colors) {
			selectedColor = colors[0]
			selectedSize = sizes[0]
		}
	})
</script>

<template>
	<div v-if="loading">
		<Icon name="spinner" :size="50"></Icon>
	</div>
	<div v-else class="main-container">
		<section class="carousel-container">
			<Carousel v-if="carouselData" :itemsToShow="1">
				<Slide v-for="image in carouselData" :key="image">
					<div class="carousel__item">
						<img class="product-image" :src="image"/>
					</div>
				</Slide>
				<template #addons>
					<Navigation>
						<template #next>
							<Icon name="arrow"></Icon>
						</template>
						<template #prev>
							<Icon name="arrow" :style="{ transform: 'rotate(180deg)'}"></Icon>
						</template>
					</Navigation>
				</template>
			</Carousel>
			<div class="carousel-thumbnails">
				<ul>
					<li
						v-for="image in carouselData" :key="image"
						class="carousel-thumbnails--item"
					>
						<img class="carousel-thumbails--image" :src="image">
					</li>
				</ul>
			</div>
		</section>
		<section class="options-container">
			<div class="product-details">
				<h2>{{ product?.name }}</h2>
				<Rating />
				<p class="product-price">${{ product?.price[0].formattedPriceWithoutCurrency }}</p>
				<p class="product-description">{{ product?.longDescription }}</p>
				<hr>
				<div class="product-options">
					<div class="product-options--color-size">
						<ColorSelector :colors="colors" v-model="selectedColor" />
						<SizeSelector :sizes="sizes" v-model="selectedSize" />
					</div>
					<div class="product-options--qty-stock">
						<QuantitySelector v-model="selectedQty" />
						<StockInfo class="stock-info" />
					</div>
					<ProductInfo :data="productInfo" />
					<div class="product-options--cart-cta">
						<button
							class="add-cart"
							@click="addUpdateCart({
								id: product?.uniqueID as string,
								size: selectedSize,
								qty: selectedQty,
								color: selectedColor
							})"
						>
							ADD TO CART
						</button>
						<button class="add-wishlist">
							<Icon name="heart" :size="20" />
						</button>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<style scoped>

.carousel-thumbnails ul {
	display: flex;
}

.carousel-thumbnails--item {
	width: 100%;
	border:1px solid var(--gray-lighter);
	margin-right: 0.5rem;
	margin-bottom: 0.5rem;
}

.carousel-thumbnails--item:last-child {
	margin-right: 0;
}

.add-cart {
	background: var(--red);
	color: var(--white);
	padding: 2.5rem 0;
	text-align: center;
	width: 100%;
	font-weight: 500;
	cursor: pointer;
}

.add-wishlist {
	border: 1px solid var(--gray-lighter);
	padding: 1.4rem;
	margin-left: 2rem;
	cursor: pointer;
}

.product-options--cart-cta {
	margin-top: 8rem;
	display: flex;
	align-items: center;
}

.stock-info {
	margin-left: 3rem;
}

.product-options--qty-stock {
	display: flex;
	align-items: center;
}

.product-options {
	display: flex;
	flex-direction: column;
}

.product-options--color-size {
	display: flex;
	margin-bottom: 3rem;
}

hr {
	border-bottom: 1px solid var(--gray-light);
	margin: 2.5rem 0 3.5rem 0;
}
.product-description {
	color: var(--gray);
	line-height: 2.4rem;
}

.product-price {
	font-size: 2.6rem;
	font-weight: 600;
	margin: 3rem 0;
}

.product-details {
	display: flex;
	flex-direction: column;
}

h2 {
	font-size: 2.2rem;
	text-transform: capitalize;
	margin-bottom: 2rem;
	font-weight: 500;
}
.carousel {
	display: flex;
	width: 100%;
}

.main-container {
	display: grid;
	width: 100%;
	grid-row-gap: 1.5rem;
	padding: 0 1.5rem;
}

.carousel-container {
	overflow: hidden;
}

.carousel-container {
	display: flex;
	flex-direction: column;
	width: 100%;
}

.options-container {
	display: flex;
	width: 100%;
}

@media only screen and (min-width: 768px) {
	.main-container {
		width: 100%;
		max-width: 120rem;
		display: grid;
		grid-template-columns: repeat(12, 1fr);
	}

	.carousel-container {
		display: flex;
		width: 100%;
		grid-column: span 7;
	}

	.options-container {
		display: flex;
		width: 100%;
		grid-column-start: 9;
		grid-column-end: 13;
	}

	.product-options--color-size {
		flex-direction: column;
		gap: 3rem;
	}

	.add-cart {
		max-width: 18rem;
	}
}

@media only screen and (min-width: 992px) {
	.product-options--color-size {
		flex-direction: row;
	}
}
</style>