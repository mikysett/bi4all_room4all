import { createStore } from 'vuex'

const store = createStore({
	state: {
		searchData: {
			day: new Date('2022-03-24'),
			day_of_week: ((new Date).getDay() + 6) % 7,
			hours_span: {
				start: 0,
				end: 0,
			},
			nb_people: 0,
			hour_start: "",
			hour_end: "",
		},
		isEditorMode: false,
		roomSel: "",
		hoursSel: {
			start: "",
			end: ""
		},
		meetingSel: ""
	},
	getters: {
		getSearchData(state) {
			return state.searchData
		},
		getRoomSel(state) {
			return state.roomSel
		},
		getHoursSel(state) {
			return state.hoursSel
		},
		getIsEditorMode(state) {
			return state.isEditorMode
		},
		getMeetingSel(state) {
			return state.meetingSel
		}
	},
	mutations: {
		saveSearchData(state, data) {   
			state.searchData = data
		},
		saveHoursSpan(state, data) {   
			state.searchData.hours_span = data
		},
		saveRoomSel(state, data) {   
			state.roomSel = data
		},
		saveHoursSel(state, data) {
			state.hoursSel = data
		},
		saveNbPeople(state, data) {
			state.searchData.nb_people = data
		},
		saveHours(state, data) {
			state.searchData.hour_start = data.start
			state.searchData.hour_end = data.end
		},
		saveIsEditorMode(state, data) {
			state.isEditorMode = data
		},
		saveMeetingSel(state, data) {
			state.meetingSel = data
		}
	},
	actions: {
		updateSearchData({commit}, payload) {
			commit('saveSearchData', payload)
		}
	}
})

export default store