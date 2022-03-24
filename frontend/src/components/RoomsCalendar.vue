<template>
	<div class="main-content">
		<RoomAvailability v-for="room in rooms" :room="room" :key="room.id" />
	</div>
</template>

<script setup>
import { rooms } from '@/util/helper'
import RoomAvailability from '@/components/RoomAvailability'
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
