<script setup lang="ts">
let stars = $ref<boolean[]>(new Array(5).fill(false))

const setRating = (selected: number) => {
	stars = [...stars].map((star, index) => { 
		return index <= selected
	})
}
</script>

<template>
	<div class="rating-container">
		<ul>
			<li v-for="star, index in stars">
				<Icon
					:class="[{
						yellow: !!star
					}, 'star']"
					name="star"
					@click="setRating(index)"
				>
				</Icon>
			</li>
		</ul>
		<span class="delimiter delimiter-dash">-</span>
		<div class="rating-options">
			<span class="rating-option rating-option-read">Read reviews(02)</span>
			<span class="delimiter delimiter-pipe">|</span>
			<span class="rating-option rating-option-write">Write review</span>
		</div>
	</div>
</template>

<style scoped>

.delimiter-dash {
	color: var(--gray);
}
.delimiter {
	margin: 0 0.8rem;
}

.rating-option-write {
	font-size: 1.241rem;
}

.rating-option-read {
	color: var(--gray);
	font-size: 1.241rem;
	font-style: italic;
}

ul {
	display: flex;
}

li {
	margin-right: 0.3rem;
}

.rating-container {
	display: flex;
	align-items: center;
}

.star {
	cursor: pointer;
}

.yellow {
	color: var(--yellow);
}
</style>