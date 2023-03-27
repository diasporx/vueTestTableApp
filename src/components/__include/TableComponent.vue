<template>
    <table>
        <thead>
            <tr class="darked">
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in items" :key="index">
                <td>{{ item.name }}</td>
                <td>{{ item.email }}</td>
            </tr>
        </tbody>
    </table>
</template>
  
<script>
export default {
    computed: {
        items() {
            return this.$store.state.items
        }
    }
}
</script>

<style scoped>
table {
    width: 100%;
    text-align: left;
    transition: all .3s ease;
    border-collapse: collapse;
}

table .darked th {
    background-color: #212529;
    border-color: #32383e;
    color: #fff;
}


table td,
table th {
    padding: .75rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
}
</style>
  