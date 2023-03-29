<script setup lang="ts">
const props = defineProps<{
	colors: string[],
	modelValue?: string
}>()

const emit = defineEmits<{
    (_event: 'update:modelValue', _value: string): void,
}>()

</script>

<template>
	<div class="color-selector">
		<span>Color</span>
		<ul>
			<li 
				v-for="color in colors" :key="color" 
				class="color-item"
			>
				<div 
					:class="[{
						selected: modelValue === color
					}, 'color']"
					:style="{ backgroundColor: color }"
					@click="emit('update:modelValue', color)"
				>
				</div>
			</li>
		</ul>
	</div>
</template>

<style scoped>
.color-selector {
	display: flex;
	align-items: center;
}

span {
	font-weight: 500;
	margin-right: 2rem;
}

ul {
	display: flex;
}

li {
	margin-right: 1.2rem;
}

.color {
	width: 2rem;
	height: 2rem;
	border: 1px solid var(--gray-lighter);
	cursor: pointer;
}

.selected {
	opacity: 0.5;
}

</style>