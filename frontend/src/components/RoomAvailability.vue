<template>
	<div class="room">
		<div class="room_header">
			<span>{{ room.id }}</span>
			<span>{{ room.name }}</span>
			<span>max capacity: {{ room.max_capacity }}</span>
			<span>Notes: {{ room.notes }}</span>
		</div>
		<div class="room_calendar">
			
		</div>
	</div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps(['room'])

console.log(props.room)
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
