<template>
	<div class="main-content">
		<template v-for="room in rooms" :key="room.id">
			<RoomAvailability v-if="isRoomEligible(room)" :room="room" />
		</template>
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

const isRoomEligible = (room) => {
	const searchData = store.getters.getSearchData

	console.log(room)

	if (searchData.nb_people !== ""
		&& searchData.nb_people > room.max_capacity)
		return false;
	if (searchData.hour_start !== "" && searchData.hour_end !== "")
	{
		if (room.opening_hours[searchData.day_of_week].start > searchData.hour_start
			|| room.opening_hours[searchData.day_of_week].end < searchData.hour_end)
			return false;
		console.log(searchData.hour_start)
		console.log(searchData.hour_end)
		for (let i = 0 ; i < Object.keys(room.day_meetings).length ; i++) {
			const curr_meeting = room.day_meetings[i]
			console.log("checking meeting:")
			console.log(curr_meeting)
			const meeting_start = curr_meeting.hour_start
			const meeting_end = curr_meeting.hour_end
			if ((meeting_start <= searchData.hour_start
						&& meeting_end >= searchData.hour_end)
					|| (meeting_start >= searchData.hour_start
						&& meeting_start < searchData.hour_end)
					|| (meeting_end > searchData.hour_start
						&& meeting_end < searchData.hour_end))
				return false;
		}
	}
	
	return true;
}

</script>
