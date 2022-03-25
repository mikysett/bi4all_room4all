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
	0: {start: 600, end: 995},
	1: {start: 600, end: 995},
	2: {start: 600, end: 995},
	3: {start: 600, end: 995},
	4: {start: 600, end: 995},
	5: {start: 600, end: 995},
	6: {start: 0, end: 0},
}

const hours_2 = {
	0: {start: 600, end: 995},
	1: {start: 600, end: 995},
	2: {start: 600, end: 995},
	3: {start: 660, end: 1200},
	4: {start: 660, end: 1200},
	5: {start: 600, end: 995},
	6: {start: 0, end: 0},
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
		name: "first meeting",
		user: "Michele",
		email: "test@example.com",
		nb_people: 10,
		day: "2022-03-24",
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
		day: "2022-03-24",
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
		day: "2022-03-24",
		hour_start: 740,
		hour_end: 790,
		notes: "can't change the hour"
	}
}

export const rooms = {
	0: {
		id: 0,
		name: "Small",
		color: "#ff4444",
		max_capacity: 10,
		opening_hours: hours_1,
		notes: "simple notes",
		day_meetings: mock_meetings
	},
	1: {
		id: 1,
		name: "Medium",
		color: "#550000",
		max_capacity: 20,
		opening_hours: hours_2,
		notes: "simple notes",
		day_meetings: mock_meetings
	},
	2: {
		id: 2,
		name: "Medium large",
		color: "#00ffff",
		max_capacity: 30,
		opening_hours: hours_3,
		notes: "simple notes",
		day_meetings: mock_meetings
	},
	3: {
		id: 3,
		name: "forth room",
		color: "#00ff00",
		max_capacity: 40,
		opening_hours: hours_1,
		notes: "simple notes",
		day_meetings: mock_meetings
	},
	4: {
		id: 4,
		name: "forth room",
		color: "#0000ff",
		max_capacity: 40,
		opening_hours: hours_1,
		notes: "simple notes",
		day_meetings: mock_meetings
	},
	5: {
		id: 5,
		name: "fifth room",
		color: "#550000",
		max_capacity: 40,
		opening_hours: hours_1,
		notes: "simple notes",
		day_meetings: mock_meetings
	},
	6: {
		id: 6,
		name: "fifth room",
		color: "#550000",
		max_capacity: 40,
		opening_hours: hours_1,
		notes: "simple notes",
		day_meetings: mock_meetings
	},
	7: {
		id: 7,
		name: "fifth room",
		color: "#550000",
		max_capacity: 40,
		opening_hours: hours_1,
		notes: "simple notes",
		day_meetings: mock_meetings
	},
	8: {
		id: 8,
		name: "fifth room",
		color: "#550000",
		max_capacity: 40,
		opening_hours: hours_1,
		notes: "simple notes",
		day_meetings: mock_meetings
	},
	9: {
		id: 9,
		name: "fifth room",
		color: "#550000",
		max_capacity: 40,
		opening_hours: hours_2,
		notes: "simple notes",
		day_meetings: mock_meetings
	},
	10: {
		id: 10,
		name: "fifth room",
		color: "#550000",
		max_capacity: 40,
		opening_hours: hours_3,
		notes: "simple notes",
		day_meetings: mock_meetings
	},
	11: {
		id: 11,
		name: "Auditorium",
		color: "#550000",
		max_capacity: 100,
		opening_hours: hours_3,
		notes: "simple notes",
		day_meetings: mock_meetings
	}
}