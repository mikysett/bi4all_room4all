<template>
	<div class="free-spot"
		style="position: absolute; top: 0; overflow: hidden;"
		:style="{left: startPos + 'px', width: width + 'px'}">
		<span>{{ minFormat(spot.start) }}</span>
		<span> - </span>
		<span>{{ minFormat(spot.end) }}</span>
	</div>
</template>

<script setup>
/* eslint-disable */
import { defineProps, ref, computed } from 'vue'
import { useStore } from 'vuex'
import { minFormat } from '@/util/helper'

const store = useStore()
const props = defineProps(['room', 'spot'])

const startPos = computed(() => {
	return (props.spot.start
		- store.getters.getSearchData.hours_span.start) * 3
})

const width = computed(() => {
	return (props.spot.end
		- props.spot.start) * 3
})

</script>
