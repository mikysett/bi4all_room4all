export const server = {
	baseURL: 'http://localhost:3000'
}

export const formatMin = (min) => {
	const hour = Math.floor(min / 60)
	const minutes = min % 60

	return hour.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
		+ ":"
		+ minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
}

export const formatHour = (hourString) => {
	if (hourString === "")
		return "";
	const subHour = hourString.split(':')

	return (parseInt(subHour[0]) * 60 + parseInt(subHour[1]))
}

export const formatDate = (date) => {
	if (date === "")
		return "";

	var d = new Date(date),
		month = '' + (d.getMonth() + 1),
		day = '' + d.getDate(),
		year = d.getFullYear();

	if (month.length < 2) 
		month = '0' + month;
	if (day.length < 2) 
		day = '0' + day;

	return [year, month, day].join('-');
}

const hours_1 = {
	0: {start: 480, end: 1080},
	1: {start: 360, end: 1080},
	2: {start: 360, end: 1080},
	3: {start: 360, end: 1080},
	4: {start: 360, end: 960},
	5: {start: 480, end: 720},
	6: {start: 0, end: 0},
}

const hours_2 = {
	0: {start: 420, end: 1320},
	1: {start: 420, end: 1320},
	2: {start: 420, end: 1320},
	3: {start: 420, end: 1320},
	4: {start: 420, end: 1320},
	5: {start: 420, end: 1320},
	6: {start: 420, end: 1320},
}

const hours_3 = {
	0: {start: 600, end: 995},
	1: {start: 600, end: 995},
	2: {start: 600, end: 995},
	3: {start: 260, end: 995},
	4: {start: 260, end: 995},
	5: {start: 600, end: 995},
	6: {start: 0, end: 0},
}

const mock_meetings = {
	0: {
		id: 0,
		room_id: 0,
		name: "Work Session",
		user: "Michele",
		email: "Michele@example.com",
		nb_people: 17,
		day: "2022-03-24",
		hour_start: 480,
		hour_end: 570,
		notes: "Update client needs"
	},
	1: {
		id: 2,
		room_id: 5,
		name: "Board Meeting",
		user: "Daniel",
		email: "Daniel@example.com",
		nb_people: 12,
		day: "2022-03-24",
		hour_start: 630,
		hour_end: 810,
		notes: "KPI's Discussion"
	},
	2: {
		id: 3,
		room_id: 8,
		name: "Pitch Presentation",
		user: "Bruno",
		email: "bruno@example.com",
		nb_people: 5,
		day: "2022-03-24",
		hour_start: 1200,
		hour_end: 1290,
		notes: "Leandro will practice to the team"
	}
}
const mock_meetings_2 = {
	0: {
		id: 0,
		room_id: 1,
		name: "Work Session",
		user: "Michele",
		email: "Michele@example.com",
		nb_people: 17,
		day: "2022-03-24",
		hour_start: 600,
		hour_end: 720,
		notes: "Finishing product"
	},
	1: {
		id: 2,
		room_id: 4,
		name: "Board Meeting",
		user: "Daniel",
		email: "Daniel@example.com",
		nb_people: 12,
		day: "2022-03-24",
		hour_start: 900,
		hour_end: 930,
		notes: "Welcome new board members"
	},
	2: {
		id: 3,
		room_id: 7,
		name: "Pitch Presentation",
		user: "Bruno",
		email: "bruno@example.com",
		nb_people: 5,
		day: "2022-03-24",
		hour_start: 1080,
		hour_end: 1260,
		notes: "Practice for annual awards"
	}
}

const mock_meetings_3 = {
	0: {
		id: 0,
		room_id: 2,
		name: "Work Session",
		user: "Michele",
		email: "Michele@example.com",
		nb_people: 4,
		day: "2022-03-24",
		hour_start: 360,
		hour_end: 420,
		notes: "Product Development"
	},
	1: {
		id: 2,
		room_id: 3,
		name: "Board Meeting",
		user: "Daniel",
		email: "Daniel@example.com",
		nb_people: 12,
		day: "2022-03-24",
		hour_start: 620,
		hour_end: 750,
		notes: "Financial analysis"
	},
	2: {
		id: 3,
		room_id: 6,
		name: "Pitch Presentation",
		user: "Bruno",
		email: "bruno@example.com",
		nb_people: 5,
		day: "2022-03-24",
		hour_start: 960,
		hour_end: 1080,
		notes: "Client arrives 10m later"
	}
}

export const rooms = {
	0: {
		id: 0,
		name: "Matrix",
		color: "#e37d24",
		max_capacity: 20,
		opening_hours: hours_1,
		notes: "simple notes",
		day_meetings: mock_meetings
	},
	1: {
		id: 1,
		name: "Silicon Valley",
		color: "#e3d924",
		max_capacity: 10,
		opening_hours: hours_2,
		notes: "simple notes",
		day_meetings: mock_meetings_2
	},
	2: {
		id: 2,
		name: "Turing",
		color: "#59e322",
		max_capacity: 4,
		opening_hours: hours_1,
		notes: "simple notes",
		day_meetings: mock_meetings_3
	},
	3: {
		id: 3,
		name: "Anonymous",
		color: "#1fdbb6",
		max_capacity: 4,
		opening_hours: hours_1,
		notes: "simple notes",
		day_meetings: mock_meetings_3
	},
	4: {
		id: 4,
		name: "Pyrate Bay",
		color: "#1487c9",
		max_capacity: 10,
		opening_hours: hours_2,
		notes: "simple notes",
		day_meetings: mock_meetings_2
	},
	5: {
		id: 5,
		name: "Wall Street",
		color: "#8e7ef7",
		max_capacity: 20,
		opening_hours: hours_2,
		notes: "simple notes",
		day_meetings: mock_meetings
	},
	6: {
		id: 6,
		name: "Pi",
		color: "#ad0ad1",
		max_capacity: 4,
		opening_hours: hours_1,
		notes: "simple notes",
		day_meetings: mock_meetings_3
	},
	7: {
		id: 7,
		name: "Fermat's Room",
		color: "#c9088f",
		max_capacity: 10,
		opening_hours: hours_2,
		notes: "simple notes",
		day_meetings: mock_meetings_2
	},
	8: {
		id: 8,
		name: "Untraceable",
		color: "#8c5d2e",
		max_capacity: 20,
		opening_hours: hours_2,
		notes: "simple notes",
		day_meetings: mock_meetings
	},
	9: {
		id: 9,
		name: "Black Mirror",
		color: "#c9a98b",
		max_capacity: 4,
		opening_hours: hours_1,
		notes: "simple notes",
		day_meetings: mock_meetings_3
	},
	10: {
		id: 10,
		name: "Big Bang",
		color: "#d97777",
		max_capacity: 20,
		opening_hours: hours_2,
		notes: "simple notes",
		day_meetings: mock_meetings
	},
	11: {
		id: 11,
		name: "Auditorium",
		color: "#d97777",
		max_capacity: 100,
		opening_hours: hours_3,
		notes: "simple notes",
		day_meetings: mock_meetings
	}
}