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
			<div class="btn-container">
				<button class="std-btn" type="submit">Search</button>
			</div>
		</form>
		<div class="menu-separator"></div>
		<div class="admin-menu">
			<p class="admin-title">Administrator</p>
			<router-link class="inline-btn" to="/add-room">Create a new room</router-link>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { formatDate } from '@/util/helper'

const store = useStore()

const search = ref({
	day: formatDate(store.getters.getSearchData.day),
	start_time: "",
	end_time: "",
	nb_people: ""
})

const checkAvailability = () => {
	console.log("search value")
	console.log(search.value)
}
</script>
