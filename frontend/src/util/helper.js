export const minFormat = (min) => {
	const hour = Math.floor(min / 60)
	const minutes = min % 60

	return hour.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
		+ ":"
		+ minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
}

const hours_1 = {
	0: {start: 600, end: 995},
	1: {start: 600, end: 995},
	2: {start: 600, end: 995},
	3: {start: 660, end: 995},
	4: {start: 720, end: 995},
	5: {start: 600, end: 995},
	6: {start: 0, end: 0},
}

const hours_2 = {
	0: {start: 600, end: 995},
	1: {start: 600, end: 995},
	2: {start: 600, end: 995},
	3: {start: 660, end: 1200},
	4: {start: 720, end: 995},
	5: {start: 600, end: 995},
	6: {start: 0, end: 0},
}

const hours_3 = {
	0: {start: 600, end: 995},
	1: {start: 600, end: 995},
	2: {start: 600, end: 995},
	3: {start: 260, end: 995},
	4: {start: 720, end: 995},
	5: {start: 600, end: 995},
	6: {start: 0, end: 0},
}

const mock_meetings = {
	0: {
		id: 0,
		room_id: 0,
		name: "first meeting",
		user: "Michele",
		email: "test@example.com",
		nb_people: 10,
		day: "__date__",
		hour_start: 600,
		hour_end: 660,
		notes: "can't change the hour"
	},
	1: {
		id: 1,
		room_id: 0,
		name: "first meeting",
		user: "Michele",
		email: "test@example.com",
		nb_people: 10,
		day: "__date__",
		hour_start: 680,
		hour_end: 710,
		notes: "can't change the hour"
	},
	2: {
		id: 0,
		room_id: 0,
		name: "first meeting",
		user: "Michele",
		email: "test@example.com",
		nb_people: 10,
		day: "__date__",
		hour_start: 740,
		hour_end: 790,
		notes: "can't change the hour"
	}
}

export const rooms = {
	0: {
		id: 0,
		name: "first room",
		color: "#550000",
		max_capacity: 40,
		opening_hours: hours_1,
		notes: "simple notes",
		day_meetings: mock_meetings
	},
	1: {
		id: 1,
		name: "beauty room",
		color: "#550000",
		max_capacity: 40,
		opening_hours: hours_2,
		notes: "simple notes",
		day_meetings: mock_meetings
	},
	2: {
		id: 2,
		name: "third room",
		color: "#550000",
		max_capacity: 40,
		opening_hours: hours_3,
		notes: "simple notes",
		day_meetings: mock_meetings
	},
	3: {
		id: 3,
		name: "forth room",
		color: "#550000",
		max_capacity: 40,
		opening_hours: hours_1,
		notes: "simple notes",
		day_meetings: mock_meetings
	},
	4: {
		id: 4,
		name: "fifth room",
		color: "#550000",
		max_capacity: 40,
		opening_hours: hours_1,
		notes: "simple notes",
		day_meetings: mock_meetings
	},
}