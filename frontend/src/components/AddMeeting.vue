<template>
	<div class="std-card">
		<button class="std-btn" type="button" @click="navigate()">Back</button>
		<form class="std-form" @submit.prevent="addMeeting">
			<div class="form-header">
				Add a meeting <br>
				to room
				<span
					:style="{background: room.color}"
					class="form-room-name">
					{{ room.name }}
				</span>
			</div>
			<div>
				<input type="date"
					class="date"
					name="day"
					v-model="meeting.day">
			</div>
			<div class="hours">
				<input type="time"
					name="start_time"
					v-model="meeting.hour_start">
				<input type="time"
					name="end_time"
					v-model="meeting.hour_end">
			</div>
			<div>
				<input type="text"
					placeholder="Meeting name"
					name="name"
					v-model="meeting.name">
			</div>
			<div>
				<input type="text"
					placeholder="Organizer"
					name="user"
					v-model="meeting.user">
			</div>
			<div>
				<input type="email"
					placeholder="Email [ optional ]"
					name="email"
					v-model="meeting.email">
			</div>
			<div>
				<input type="number"
					min="1"
					placeholder="Number of people"
					name="nb_people"
					v-model="meeting.nb_people">
			</div>
			<div>
				<input type="text"
					placeholder="Notes [ optional ]"
					name="notes"
					v-model="meeting.notes">
			</div>
			<div v-if="formError !== ''" class="form-error">
				{{ formError }}
			</div>
			<div class="btn-container">
				<button class="std-btn" type="submit">Book meeting</button>
			</div>
		</form>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import router from '@/router/index'
import { formatDate, formatMin } from '@/util/helper'

const store = useStore()

const searchData = store.getters.getSearchData
const hoursSel = store.getters.getHoursSel

const room = store.getters.getRoomSel;

console.log(hoursSel)

const meeting = ref({
	room_id: room.id,
	name: "",
	user: "",
	email: "",
	nb_people: "",
	day: formatDate(searchData.day),
	hour_start: formatMin(hoursSel.start),
	hour_end: formatMin(hoursSel.end),
	notes: ""
})
const formError = ref("")

const addMeeting = () => {
	formError.value = ""
	if (meeting.value.day === ""
		|| meeting.value.hour_start === ""
		|| meeting.value.hour_end === ""
		|| meeting.value.name === ""
		|| meeting.value.user === ""
		|| meeting.value.nb_people === "")
	{
		formError.value = "All fields except the notes and email are mandatory"
		return;
	}
	// query to backend here
}

const navigate = () => {
	router.go(-1);
}
</script>
