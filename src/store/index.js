// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        items: JSON.parse(localStorage.getItem('items')) || [],
        showModal: false,
        newItem: {
            name: '',
            phone: ''
        }
    },
    mutations: {
        addItem(state, item) {
            state.items.push(item)
            localStorage.setItem('items', JSON.stringify(state.items))
        },
        setShowModal(state, value) {
            state.showModal = value
        },
        setNewItem(state, value) {
            state.newItem = value
        }
    },
    actions: {
        addItem({ commit, state }) {
            commit('addItem', { ...state.newItem })
            commit('setNewItem', { name: '', phone: '' })
            commit('setShowModal', false)
        }
    }
})
