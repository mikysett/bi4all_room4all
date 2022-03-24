<template>
	<div class="add-meeting">
		<button class="std-btn" type="button" @click="navigate()">Back</button>
		<form @submit.prevent="addMeeting">
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
					placeholder="Email"
					name="email"
					v-model="meeting.email">
			</div>
			<div>
				<input type="number"
					placeholder="Number of people"
					name="nb_people"
					v-model="meeting.nb_people">
			</div>
			<div class="btn-container">
				<button class="std-btn" type="submit">Book meeting</button>
			</div>
		</form>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import router from '@/router/index'

const meeting = ref({
	room_id: "",
	name: "",
	user: "",
	email: "",
	nb_people: "",
	day: "",
	hour_start: "",
	hour_end: "",
	notes: ""
})

const addMeeting = () => {
	if (meeting.value)
	{
		// console.log(meeting.value)
		return true
	}
}

const navigate = () => {
	router.go(-1);
}
</script>
