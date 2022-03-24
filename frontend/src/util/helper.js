const hours_1 = {
	0: {start: 600, end: 995},
	1: {start: 600, end: 995},
	2: {start: 600, end: 995},
	3: {start: 660, end: 995},
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
		hour_start: "11:00",
		hour_end: "11:30",
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
		hour_start: "12:00",
		hour_end: "12:30",
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
		hour_start: "12:30",
		hour_end: "13:30",
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
		opening_hours: hours_1,
		notes: "simple notes",
		day_meetings: mock_meetings
	},
	2: {
		id: 2,
		name: "third room",
		color: "#550000",
		max_capacity: 40,
		opening_hours: hours_1,
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