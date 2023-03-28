<template>
    <section>
        <div v-if="this.selectedParent != null" class="d-flex mb-1 flex-column">
            <h1 class="mb-1">Начальник: {{ this.selectedParent }}</h1>
            <custom-button @click="initDefaultTable()">
                Вернуться
            </custom-button>
        </div>
        <div v-else class="d-flex mb-1 flex-column">
            <h1>Все пользователи:</h1>
        </div>
        <table>
            <thead>
                <tr class="header-row">
                    <th></th>
                    <th @click="sortArray('name')" class="SortingTh">
                        Имя
                    </th>
                    <th @click="sortArray('phone')" class="SortingTh">
                        Телефон
                    </th>
                    <th>
                        Действие
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in arrUsers" :key="index">
                    <td @click="renderChildren(item.id, item.name)">
                        <div class="d-flex align-items-center justify-content-center">
                            <svg viewBox="0 0 100 100" width="15" height="15" class="actionBtn">
                                <rect y="10" width="100" height="15" rx="1" />
                                <rect y="40" width="100" height="15" rx="1" />
                                <rect y="70" width="100" height="15" rx="1" />
                            </svg>
                        </div>
                    </td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.phone }}</td>
                    <td>
                        <custom-button @click="deleteCurrentUser(item)">
                            Удалить
                        </custom-button>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>
<script>
// UI 
import customButton from '../UI/buttonCustom.vue'

export default {
    name: 'TableComponent',
    data() {
        return {
            selectedParent: null,
            sortDirection: 1,
            arrUsers: []
        }
    },
    components: { customButton },
    computed: {
        items_users() {
            const { items } = this.$store.state
            return [...items]
        }
    },
    methods: {
        deleteCurrentUser(user) {
            this.$store.dispatch('deleteItem', user.id)
        },
        sortArray(sortBy) {
            const { arrUsers } = this
            const direction = this.sortDirection === 1 ? -1 : 1
            const sortedArray = arrUsers.sort((a, b) => {
                const valueA = a[sortBy].toUpperCase()
                const valueB = b[sortBy].toUpperCase()
                return (valueA < valueB ? -1 : valueA > valueB ? 1 : 0) * direction
            })
            this.sortDirection = direction
            this.arrUsers = sortedArray
        },
        initTable(items) {
            this.arrUsers = items;
        },
        renderChildren(id, name) {
            this.selectedParent = name
            this.arrUsers = this.items_users.filter((user) => user.parentId === id);
        },
        initDefaultTable() {
            this.selectedParent = null
            this.initTable(this.items_users)
        }
    },
    created() {
        this.initTable(this.items_users)
    },
    watch: {
        items_users(newSortedItems) {
            this.initTable(newSortedItems)
        },
        selectedParent: {
            handler(newValue) {
                this.selectedParent = newValue
            }
        }
    },
};
</script>
<style scoped>
table {
    width: 100%;
    text-align: left;
    transition: all .3s ease;
    border-collapse: collapse;
}

.actionBtn {
    position: relative;
    cursor: pointer;
    z-index: 8
}

.header-row th {
    background-color: #212529;
    border-color: #32383e;
    color: #fff;
    cursor: pointer;
}

table td,
table th {
    padding: .75rem;
    vertical-align: middle;
    border-top: 1px solid #dee2e6;
}
.SortingTh {
    color: orange !important;
}
</style>