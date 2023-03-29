<script setup lang="ts">
const props = defineProps<{
	sizes?: string[],
	modelValue?: string
}>()

const emit = defineEmits<{
    (_event: 'update:modelValue', _value: string): void,
}>()

const onSizeChange = (event: Event) => { 
	const value = (event.target as HTMLInputElement).value
	emit('update:modelValue', value)
}

</script>
<template>
	<div class="size-selector">
		<span>Size</span>
		<label>
			<select @change="onSizeChange">
				<option
					v-for="size in sizes" 
					:key="size"
					:value="size"
				>
					{{ size }}
				</option>
			</select>
		</label>
	</div>
</template>

<style scoped>
	.size-selector {
		display: flex;
		align-items: center;
		width: 100%;
		justify-content: end;
	}

	span {
		font-weight: 500;
		margin-right: 2rem;
	}
	label {
		position: relative;
		cursor: pointer;
		max-width: 16rem;
		width: 100%;
	}

	label::after {
		position: absolute;
		right: 8px;
		top: 6px;
		content: '';
		width: 2.4rem;
		height: 2.4rem;
		background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj4KICAgIDxwb2x5bGluZSBwb2ludHM9IjYgOSAxMiAxNSAxOCA5Ii8+Cjwvc3ZnPgo=);
	}

	select {
		display: flex;
		flex-shrink: 0;
		flex-grow: 1;
		appearance: none;
		background: var(--white-soft);
		width: 100%;
		padding: 1rem;
		font-weight: 600;
		font-size: 1.6rem;
	}
</style>