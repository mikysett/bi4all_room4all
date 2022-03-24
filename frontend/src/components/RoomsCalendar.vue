<template>
	<div class="main-content">
		<RoomAvailability v-for="room in rooms" :room="room" :key="room.id" />
	</div>
</template>

<script setup>
import { rooms } from '@/util/helper'
import RoomAvailability from '@/components/RoomAvailability'
import { useStore } from 'vuex'

const store = useStore()

const calculateHoursSpan = (rooms) => {
	let day_of_week = store.getters.getSearchData.day_of_week
	let start = rooms[0].opening_hours[day_of_week].start
	let end = rooms[0].opening_hours[day_of_week].end

	for (let i = 0 ; i < Object.keys(rooms).length ; i++) {
		const curr_room = rooms[i]
		const curr_start = curr_room.opening_hours[day_of_week].start
		const curr_end = curr_room.opening_hours[day_of_week].end

		if (curr_start < start)
			start = curr_start
		if (curr_end > end)
			end = curr_end
	}
	return {
		start: start,
		end: end
	}
}

store.commit('saveHoursSpan', calculateHoursSpan(rooms))
// console.log(store.getters.getSearchData)

</script>
