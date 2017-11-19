import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	data:null,
	message:'hello'
}

const mutations = {
	setData:(state,projectData)=>{
		state.data=projectData;
	}
}

const actions = {
	setData:({commit},projectData)=>{
		commit('setData',projectData)
	}
}

const getters = {
	
}

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})
