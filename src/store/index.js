import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        showModal: false,
        newItem: { name: '', phone: '' },
        items: JSON.parse(localStorage.getItem('items')) || [],
        selectedParent: null
    },
    mutations: {
        setShowModal: (state, value) => { state.showModal = value },
        setNewItem: (state, value) => { state.newItem = value },
        addItem: (state, { name, phone, parentId }) => {
            const id = String(Date.now())
            state.items.push({ id, name, phone, parentId })
            localStorage.setItem('items', JSON.stringify(state.items))
        },
        deleteItem: (state, id) => {
            state.items = state.items.filter(item => item.id !== id)
            localStorage.setItem('items', JSON.stringify(state.items))
        }
    },
    actions: {
        addItem: ({ commit, state }) => {
            commit('addItem', { ...state.newItem })
            commit('setNewItem', { name: '', phone: '' })
            commit('setShowModal', false)
        },
        deleteItem: ({ commit }, id) => {
            commit('deleteItem', id)
        },
        reEditTable: ({ commit, getters }, id) => {
            const item = getters.items_users.find(item => item.id === id)
            if (item) {
                commit('setSelectedParent', item.name)
                commit('setChildTable', true)
                const filteredUsers = getters.items_users.filter(user => user.parentId === id)
                commit('setFilteredUsers', filteredUsers)
            }
        },
        initDefaultTable: ({ commit }) => {
            commit('setSelectedParent', null)
            commit('setFilteredUsers', [])
        }
    }
})