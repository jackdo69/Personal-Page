import Vue from 'vue'
import { firebaseDb } from 'boot/firebase'


const state = {
    projects: {
        
    }
}

const mutations = {
    addProject(state, payload) {
        Vue.set(state.projects, payload.id, payload.project)
    } 
}

const actions =  {
    fbReadData({ commit }) {
        let projects = firebaseDb.ref('projects/')

        //initial check for data
        projects.on('child_added', snapshot => {
            let project = snapshot.val()
            let payload = {
                id: snapshot.key,
                project: project
            }
            commit('addProject', payload)
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