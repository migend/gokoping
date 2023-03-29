<script setup lang="ts">
const props = defineProps<{
	quantity: number,
}>()
</script>
<template>
	<nav>
		<ul class="left-nav">
			<li>
				<button>
					<Icon name="hamburger"/>
				</button>
			</li>
			<li><RouterLink to="/shop">shop</RouterLink></li>
			<li><RouterLink to="/">blog</RouterLink></li>
			<li><RouterLink to="/">contact</RouterLink></li>
		</ul>
		<h1>GO<span class="text-red">K</span>OPING</h1>
		<ul class="right-nav">
			<li>
				<button>
					<ShoppingCart :quantity="props.quantity" />
				</button>
			</li>
		</ul>
	</nav>
</template>

<style scoped>
	nav {
		display: flex;
		align-items: start;
		width: 100%;
		margin: 3rem 0;
		padding: 0 1.5rem;
		position: relative;
		justify-content: center;
	}

	ul, li {
		display: flex;
		align-items: center;
	}

	ul.left-nav {
		flex-grow: 1;
	}

	ul.left-nav li:first-child {
		margin-right: 5rem;
	}

	ul.left-nav li {
		margin-right: 6.3rem;
	}

	ul.left-nav li:not(:first-child) {
		display: none;
	}

	@media screen and (min-width: 992px) {
		ul.left-nav li:not(:first-child) {
			display: flex;
		}
	}

	h1 {
		display: flex;
		align-items: center;
		position: absolute;
		font-size: 3rem;
		font-family: 'Devil Breeze', sans-serif;
		font-weight: bold;
	}

	.text-red {
		color: var(--red);
	}
	
</style>