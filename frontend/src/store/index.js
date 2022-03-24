import { createStore } from 'vuex'

const store = createStore({
	state: {
		searchData: {
			day: new Date,
			day_of_week: ((new Date).getDay() + 6) % 7,
			hours_span: "",
			nb_people: 0,
			hour_start: "",
			hour_end: "",
		},
	},
	getters: {
		getSearchData(state) {
			return state.searchData
		}
	},
	mutations: {
		saveSearchData(state, data) {   
			state.searchData = data
		},
		saveHoursSpan(state, hours_span) {   
			console.log("hours_span")
			console.log(hours_span)
			state.searchData.hours_span = hours_span
		}
	},
	actions: {
		updateSearchData({commit}, payload) {
			commit('saveSearchData', payload)
		}
	}
})

export default store