<script setup lang="ts">
const props = defineProps<{
	quantity: number,
}>()
</script>
<template>
	<header>
		<div class="header-container">
			<MainNavigation :quantity="props.quantity"/>
			<div class="hero-container">
				<div class="hero">
					<h2>Gokoping Shop Detail</h2>
					<nav class="breadcrumb">
						<ul>
							<li>HOME</li>
							<li>SHOP</li>
							<li>SPRING T-SHIRT COLLECTION</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</header>
</template>

<style scoped>

header {
	display: flex;
	width: 100%;
	height: 25rem;
	background: var(--blue-lighter);
}

h2 {
	margin-top: 2rem;
}

@media only screen and (min-width: 992px) {
	header {
		height: 55rem;
	}
}

.header-container {
	display: flex;
	position: relative;
	margin: 0 auto;
	width: 100%;
	max-width: 178rem;
	justify-content: center;
	z-index: 0;
}

.hero-container {
	display: flex;
	position: absolute;
	top: 0;
	margin: 0 auto;
	width: 100%;
	max-width: 120rem;
	height: 100%;
	align-items: center;
	padding: 0 1.5rem;
	z-index: -1;
}

h2 {
	font-family: 'Montserrat', sans-serif;
	font-size: 3rem;
	font-weight: 600;
	margin-bottom: 2rem;
	margin-top:0
}

.breadcrumb ul {
	display: flex;
	flex-wrap: wrap;
	list-style: none;
	margin: 0;
	padding: 0;
}

.breadcrumb li:not(:last-child) {
	color: var(--gray);
}
    
.breadcrumb li:not(:first-child)::before {
	display: inline-flex;
	margin: 0 0.5rem;
	content: "/";
}
</style>