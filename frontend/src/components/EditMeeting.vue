<template>
	<div class="std-card">
		<button class="std-btn" type="button" @click="navigate()">Back</button>
		<form class="std-form" @submit.prevent="addMeeting">
			<div class="form-header">
				Edit meeting for room
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
				<input autofocus
					type="text"
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
				<button class="alert-btn" @click="deleteMeeting()" type="button">DELETE meeting</button>
				<button class="std-btn" type="submit">Edit meeting</button>
			</div>
		</form>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'
import router from '@/router/index'
import { formatDate, formatMin, formatHour, server } from '@/util/helper'


const store = useStore()

const room = store.getters.getRoomSel;

const meeting = ref(store.getters.getMeetingSel)
const formError = ref("")

// console.log(meeting.value.day)
meeting.value.day = formatDate(meeting.value.day)
// console.log(meeting.value.day)
meeting.value.hour_start = formatMin(meeting.value.hour_start)
meeting.value.hour_end = formatMin(meeting.value.hour_end)

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
	meeting.value.hour_start = formatHour(meeting.value.hour_start)
	meeting.value.hour_end = formatHour(meeting.value.hour_end)
	axios
		.put(`${server.baseURL}/meeting/edit?meetingID=${meeting.value.id}`,
			meeting.value)
		.then(() => {
			router.go(-1);
		})
		.catch(() => {
			formError.value = "Error updating the meeting"
		})
}

const navigate = () => {
	meeting.value.hour_start = formatHour(meeting.value.hour_start)
	meeting.value.hour_end = formatHour(meeting.value.hour_end)
	router.go(-1);
}

const deleteMeeting = () => {
	axios.delete(`${server.baseURL}/meeting/delete?meetingID=${meeting.value.id}`,
		store.getters.getAxiosToken)
		.then(() => {
			router.go(-1);
		})
		.catch(() => {
			formError.value = "Error deleting the meeting"
		})
}
</script>
