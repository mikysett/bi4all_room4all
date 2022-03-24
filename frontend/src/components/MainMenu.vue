<template>
	<div class="main-menu">
		<div>Logo</div>
		<form @submit.prevent="checkAvailability">
			<div>
				<input type="date"
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
					name="nb_people"
					v-model="search.nb_people">
			</div>
			<div>
				<button class="std-btn" type="submit">Search</button>
			</div>
		</form>
	</div>
</template>

<script setup>
import { ref } from 'vue'
const search = ref({
	day: "",
	start_time: "",
	end_time: "",
	nb_people: "",
})

const checkAvailability = () => {
	console.log(search.value)
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
