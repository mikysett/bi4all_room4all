<template>
	<div class="room" :style="{width: max_hour_span + 'px'}">
		<div class="room_header_wrapper">
			<div class="room_header">
				<p class="room_name">{{ room.name }}</p>
				<p class="room_capacity">{{ room.max_capacity }} people</p>
				<!-- <p class="room_notes">Notes: {{ room.notes }}</p> -->
			</div>
		</div>
		<div class="room_calendar">
			<FreeSpot
				v-for="(spot, objKey) in free_spots"
				:key="objKey"
				:spot="spot"
				:room="room" />
		</div>
	</div>
</template>

<script setup>
/* eslint-disable */
import { defineProps, computed } from 'vue'
import { useStore } from 'vuex'
import FreeSpot from '@/components/FreeSpot'

const store = useStore()

const props = defineProps(['room'])

const max_hour_span = computed(() => {
	// 2 is the pixel multiplier as in FreeSpot
	// 160 is the size reserved for the room header as in the .css
	// 10 is a bit of padding corresponding to the padding of the header
	return ((store.getters.getSearchData.hours_span.end
		- store.getters.getSearchData.hours_span.start)
		* 2) + 160 + 10
})

const free_spots = computed(() => {
	let free_spots = []

	const searchData = store.getters.getSearchData

	const hours_span = searchData.hours_span
	let curr_start = props.room.opening_hours[searchData.day_of_week].start
	let room_end = props.room.opening_hours[searchData.day_of_week].end

	const day_meetings = props.room.day_meetings
	const nb_meetings = Object.keys(props.room.day_meetings).length

	for (let i = 0 ; i < nb_meetings ; i++) {
		const curr_meeting = day_meetings[i]
		if (curr_start < curr_meeting.hour_start) {
			free_spots.push({
				start: curr_start,
				end: curr_meeting.hour_start
			})
		}
		curr_start = curr_meeting.hour_end
	}
	// In case no meetings are booked for this day
	if (nb_meetings == 0) {
		free_spots.push({
			start: curr_start,
			end: hours_span.end
		})
	}
	// To save the last meeting time
	else if (curr_start != curr_start < room_end) {
		free_spots.push({
				start: curr_start,
				end: room_end
			})
	}
	return free_spots
})
</script>
