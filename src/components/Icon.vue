<script setup lang="ts">
import type { IconName } from '@/assets/icons'
import { iconsList } from '@/assets/icons'

const props = defineProps<{
	name: IconName
	size?: number
}>()

const iconTemplate = $computed<string>(() => iconsList?.[props.name] ?? '')

</script>

<template>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		:width="`${props?.size ?? 24}px`"
		:height="`${props?.size ?? 24}px`"
		viewBox="0 0 24 24"
		version="1.1"
		v-html="iconTemplate"
	>
	</svg>
</template>