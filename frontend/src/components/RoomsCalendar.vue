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

	for (let i = 0 ; i < rooms.length ; i++) {
		const curr_room = rooms[i]
		const curr_start = curr_room.opening_hours[day_of_week].start
		const curr_end = curr_room.opening_hours[day_of_week].end

		if (curr_start < start)
			start = curr_start
		if (curr_end < end)
			end = curr_end
	}
	console.log("start: " + start)
	console.log("end: " + end)
	store.commit('saveHoursSpan', {start: start, end: end})
	console.log("store.getters.getSearchData")
	console.log(store.getters.getSearchData)
}

store.commit('saveHoursSpan', calculateHoursSpan(rooms))

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
