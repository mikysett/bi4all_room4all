import { createStore } from 'vuex'

const store = createStore({
	state: {
		searchData: {
			day: new Date,
			day_of_week: ((new Date).getDay() + 6) % 7,
			hours_span: {
				start: 0,
				end: 0,
			},
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
		saveHoursSpan(state, data) {   
			state.searchData.hours_span = data
		}
	},
	actions: {
		updateSearchData({commit}, payload) {
			commit('saveSearchData', payload)
		}
	}
})

export default store