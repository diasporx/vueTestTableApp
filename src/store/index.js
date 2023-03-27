import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        items: JSON.parse(localStorage.getItem('items')) || [],
        showModal: false,
        newItem: { name: '', phone: '' },
        sortColumn: '',
        sortDirection: 1
    },
    getters: {
        sortedItems: state => {
            const { items, sortColumn, sortDirection } = state
            return [...items].sort((a, b) => {
                const valueA = a[sortColumn]
                const valueB = b[sortColumn]
                return (valueA < valueB ? -1 : (valueA > valueB ? 1 : 0)) * sortDirection
            })
        }
    },
    mutations: {
        addItem: (state, item) => {
            state.items.push(item)
            localStorage.setItem('items', JSON.stringify(state.items))
        },
        setShowModal: (state, value) => { state.showModal = value },
        setNewItem: (state, value) => { state.newItem = value },
        setSort: (state, { column, direction }) => {
            state.sortColumn = column
            state.sortDirection = direction
        }
    },
    actions: {
        addItem: ({ commit, state }) => {
            commit('addItem', { ...state.newItem })
            commit('setNewItem', { name: '', phone: '' })
            commit('setShowModal', false)
        }
    }
})