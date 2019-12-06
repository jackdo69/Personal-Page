


const state = {
    projects: {
        'id1': {
            name: '[Firebase-VueJS] Post-it Notes',
            imgURL:'https://i.imgur.com/Gbw8Caj.png',
            codeURL:'https://github.com/jackdo69/Pronote',
            demoURL:'https://pronote-2026b.web.app/'
        },
        'id2': {
            name: '[Wordpress] Business Website',
            imgURL:'https://i.imgur.com/lm1sJzB.png',
            codeURL:'https://github.com/jackdo69/Oriental-Produce',
            demoURL:'http://orientalproduce.com.au/'
        },
        'id3': {
            name: '[FCC-ReactJS] Pomodoro Clock',
            imgURL:'https://i.imgur.com/jpPdKcQ.png',
            codeURL:'https://github.com/jackdo69/pomodoro-clock',
            demoURL:'https://codepen.io/jackdo69/full/oNggPYQ'
        },
        'id4': {
            name: '[FCC-ReactJS] Random Quote',
            imgURL:'https://i.imgur.com/c45p7xT.png',
            codeURL:'https://github.com/jackdo69/javascript-quote-machine',
            demoURL:'https://codepen.io/jackdo69/full/OGrGbN'
        },
        'id5': {
            name: '[FCC-ReactJS] Drum Machine',
            imgURL:'https://i.imgur.com/JOXdPer.png',
            codeURL:'https://github.com/jackdo69/Drum-Machine',
            demoURL:'https://codepen.io/jackdo69/full/jOEOjoM'
        },
        'id6': {
            name: '[FCC-ReactJS] Calculator',
            imgURL:'https://i.imgur.com/fKuhUOS.png',
            codeURL:'https://github.com/jackdo69/javascript-calculator',
            demoURL:'https://codepen.io/jackdo69/full/OGKEbG'
        }
    }
}

const mutations = {}

const actions =  {}

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