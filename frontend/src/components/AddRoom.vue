<template>
	<div class="std-card">
		<button class="std-btn" type="button" @click="navigate()">Back</button>
		<form class="std-form" @submit.prevent="addRoom">
			<input type="color"
				class="color-picker"
				name="color"
				v-model="room.color">
			<div class="form-header">Add a room</div>
			<div>
				<input autofocus
					type="text"
					placeholder="Room name"
					name="name"
					v-model="room.name">
			</div>
			<div>
				<input type="number"
					min="1"
					placeholder="Maximum capacity"
					name="max_capacity"
					v-model="room.max_capacity">
			</div>
			<div>
				<input type="text"
					placeholder="Notes [ optional ]"
					name="notes"
					v-model="room.notes">
			</div>
			<div class="form-header">Opening hours</div>
			<div class="daily-opening-hours-wrapper">
				<div class="daily-opening-hours">
					<div class="day-name">Monday</div>
					<input type="time"
						name="start_time"
						v-model="room.opening_hours[0].hour_start">
					<input type="time"
						name="end_time"
						v-model="room.opening_hours[0].hour_end">
				</div>
				<div class="daily-opening-hours">
					<div class="day-name">Tuesday</div>
					<input type="time"
						name="start_time"
						v-model="room.opening_hours[1].hour_start">
					<input type="time"
						name="end_time"
						v-model="room.opening_hours[1].hour_end">
				</div>
				<div class="daily-opening-hours">
					<div class="day-name">Wednesday</div>
					<input type="time"
						name="start_time"
						v-model="room.opening_hours[2].hour_start">
					<input type="time"
						name="end_time"
						v-model="room.opening_hours[2].hour_end">
				</div>
				<div class="daily-opening-hours">
					<div class="day-name">Thursday</div>
					<input type="time"
						name="start_time"
						v-model="room.opening_hours[3].hour_start">
					<input type="time"
						name="end_time"
						v-model="room.opening_hours[3].hour_end">
				</div>
				<div class="daily-opening-hours">
					<div class="day-name">Friday</div>
					<input type="time"
						name="start_time"
						v-model="room.opening_hours[4].hour_start">
					<input type="time"
						name="end_time"
						v-model="room.opening_hours[4].hour_end">
				</div>
				<div class="daily-opening-hours">
					<div class="day-name">Saturday</div>
					<input type="time"
						name="start_time"
						v-model="room.opening_hours[5].hour_start">
					<input type="time"
						name="end_time"
						v-model="room.opening_hours[5].hour_end">
				</div>
				<div class="daily-opening-hours">
					<div class="day-name">Sunday</div>
					<input type="time"
						name="start_time"
						v-model="room.opening_hours[6].hour_start">
					<input type="time"
						name="end_time"
						v-model="room.opening_hours[6].hour_end">
				</div>
			</div>
			<div v-if="formError !== ''" class="form-error">
				{{ formError }}
			</div>
			<div class="btn-container">
				<button class="std-btn" type="submit">Create room</button>
			</div>
		</form>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import router from '@/router/index'
// import { formatMin } from '@/util/helper'

const room = ref({
	name: "",
	color: "#729fcf",
	max_capacity: "",
	notes: "",
	opening_hours: {
		0: {start: "", end: ""},
		1: {start: "", end: ""},
		2: {start: "", end: ""},
		3: {start: "", end: ""},
		4: {start: "", end: ""},
		5: {start: "", end: ""},
		6: {start: "", end: ""},
	}
});

const formError = ref("")

const addRoom = () => {
	formError.value = ""
	if (room.value.name === ""
		|| room.value.max_capacity === "")
	{
		formError.value = "All fields except color and notes are mandatory"
		return;
	}
	// query to backend here
	// console.log(room.value)
}

const navigate = () => {
	router.go(-1);
}
</script>
