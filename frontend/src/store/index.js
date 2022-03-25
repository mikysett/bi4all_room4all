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
		roomSel: "",
		hoursSel: {
			start: "",
			end: ""
		}
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
		}
	},
	actions: {
		updateSearchData({commit}, payload) {
			commit('saveSearchData', payload)
		}
	}
})

export default store