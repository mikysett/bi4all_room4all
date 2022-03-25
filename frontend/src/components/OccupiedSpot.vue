<template>
	<div class="free-spot-container"
		:style="{left: startPos + 'px',
			width: width + 'px'}">
		<div @click="editMeeting()"
			class="free-spot"
			:style="{background: room.color}">
			<div class="spot-hours">
				<p>{{ meeting.name }}</p>
				<p>{{ meeting.user }}</p>
				<p>{{ formatMin(meeting.hour_start) }} - {{ formatMin(meeting.hour_end) }}</p>
				<br>
				<p>{{ meeting.nb_people }} people</p>
				<p v-if="meeting.notes !== ''">Notes: {{ meeting.notes }}</p>
			</div>
		</div>
	</div>
</template>

<script setup>
/* eslint-disable */
import { defineProps, ref, computed } from 'vue'
import { useStore } from 'vuex'
import { formatMin } from '@/util/helper'
import router from '@/router/index'

const store = useStore()
const props = defineProps(['room', 'meeting'])

const startPos = computed(() => {
	return (props.meeting.hour_start
		- store.getters.getSearchData.hours_span.start) * 2
})

const width = computed(() => {
	return (props.meeting.hour_end
		- props.meeting.hour_start) * 2
})

const editMeeting = () => {
	store.commit('saveMeetingSel', props.meeting)
	store.commit('saveRoomSel', props.room)
	
	router.push('/edit-meeting')
}

</script>
