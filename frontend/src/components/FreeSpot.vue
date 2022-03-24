<template>
	<div class="free-spot-container"
		:style="{left: startPos + 'px',
			width: width + 'px'}">
		<div class="free-spot"
			:style="{background: room.color}">
			<div class="spot-hours">
				<p>{{ minFormat(spot.start) }}</p>
				<p>{{ minFormat(spot.end) }}</p>
			</div>
		</div>
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
		- store.getters.getSearchData.hours_span.start) * 2
})

const width = computed(() => {
	return (props.spot.end
		- props.spot.start) * 2
})

</script>
