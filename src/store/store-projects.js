import Vue from 'vue'
import { firebaseDb } from 'boot/firebase'


const state = {
    projects: {},
    loading: false
}

const mutations = {
    addProject(state, payload) {
        Vue.set(state.projects, payload.id, payload.project)
    },
    setLoading(state, value) {
        state.loading = value
    } 
}

const actions =  {
    fbReadData({ commit }) {
        let projects = firebaseDb.ref('projects/')


        //initial data
        projects.once('value', snapshot => {
            // commit('setLoading', true)
        },error => {
            console.log(error);
            
        })

        //child added
        projects.on('child_added', snapshot => {
            let project = snapshot.val()
            let payload = {
                id: snapshot.key,
                project: project
            }
            commit('addProject', payload)
            commit('setLoading', true)
        })
    }
}

const getters = {
    projects(state) {
        return state.projects
    }
}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}