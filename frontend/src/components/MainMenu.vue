<template>
	<div class="main-menu">
		<div class="logo">
			<img src="./../assets/logoBlack.png" alt="Room4All Logo">
		</div>
		<form class="std-form" @submit.prevent="checkAvailability">
			<div>
				<input type="date"
					class="date"
					name="day"
					v-model="search.day">
			</div>
			<div class="hours">
				<input type="time"
					name="start_time"
					v-model="search.start_time">
				<input type="time"
					name="end_time"
					v-model="search.end_time">
			</div>
			<div class="nb-people">
				<input type="number"
					min="1"
					class="nb-people"
					name="nb_people"
					placeholder="Number of participants"
					v-model="search.nb_people">

			</div>
			<div v-if="formError !== ''" class="form-error">
				{{ formError }}
			</div>
			<div class="btn-container">
				<button class="std-btn" type="submit">Search</button>
			</div>
		</form>
		<div class="menu-separator"></div>
		<div class="admin-menu">
			<p class="admin-title">Administrator</p>
			<div class="editor-mode">
				<label class="switch">
					<input :checked="isEditorMode" type="checkbox" @click="toggleEditorMode()">
					<span class="slider round"></span>
				</label>
				<p class="editor-mode-title">
					Editor Mode
				</p>
			</div>
			<router-link class="inline-btn" to="/add-room">Create a new room</router-link>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { formatDate, formatHour } from '@/util/helper'

const store = useStore()

const isEditorMode = ref(store.getters.getIsEditorMode)
const formError = ref("")
const search = ref({
	day: formatDate(store.getters.getSearchData.day),
	start_time: "",
	end_time: "",
	nb_people: ""
})

const toggleEditorMode = () => {
	if (isEditorMode.value == false)
		isEditorMode.value = true
	else
		isEditorMode.value = false
	store.commit('saveIsEditorMode', isEditorMode.value)
}

const checkAvailability = () => {
	formError.value = ""

	if (search.value.nb_people !== "")
		store.commit('saveNbPeople', search.value.nb_people)

	if (search.value.day === "") {
		formError.value = "A date is necessary"
		return;
	}
	
	let newStart = formatHour(search.value.start_time)
	let newEnd = formatHour(search.value.end_time)
	if (search.value.start_time !== "" && search.value.end_time !== "") {
		if (newStart >= newEnd)
		{
			formError.value = "Hours are incoherent"
			newStart = ""
			newEnd = ""
		}
	}
	else if (search.value.start_time !== "" || search.value.end_time !== "")
		formError.value = "Insert both start and end hours or none of them"
	store.commit('saveHours', { start: newStart, end: newEnd })

	console.log("search value")
	console.log(search.value)
}
</script>
