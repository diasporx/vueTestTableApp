<template>
    <table>
        <thead>
            <tr class="header-row">
                <th @click="sort('name')"
                    :class="{ sorted: sortColumn === 'name', desc: sortColumn === 'name' && sortDirection === -1 }">Name
                </th>
                <th @click="sort('phone')"
                    :class="{ sorted: sortColumn === 'phone', desc: sortColumn === 'phone' && sortDirection === -1 }">Phone
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in sortedItems" :key="index">
                <td>{{ item.name }}</td>
                <td>{{ item.phone }}</td>
            </tr>
        </tbody>
    </table>
</template>
<script>
export default {
    computed: {
        sortedItems() {
            return this.$store.getters.sortedItems;
        },
        sortColumn() {
            return this.$store.state.sortColumn;
        },
        sortDirection() {
            return this.$store.state.sortDirection;
        }
    },
    methods: {
        sort(column) {
            const currentColumn = this.sortColumn;
            const direction = column === currentColumn ? -1 * this.sortDirection : 1;
            this.$store.commit('setSort', { column, direction });
        }
    }
};
</script>
<style scoped>
table {
    width: 100%;
    text-align: left;
    transition: all .3s ease;
    border-collapse: collapse;
}

.header-row th {
    background-color: #212529;
    border-color: #32383e;
    color: #fff;
    cursor: pointer;
}

.header-row th.sorted {
    color: #ffc107;
}

.header-row th.desc::after {
    content: ' ▼';
}

table td,
table th {
    padding: .75rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
}</style>