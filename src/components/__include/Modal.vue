<template>
    <transition name="modal">
        <div v-if="showModal" class="modal">
            <div class="modal-content">
                <h1 class="mb-2">Add Item</h1>
                <div class="d-flex flex-column mb-1">
                    <input class="mb-1" v-model="newItem.name" type="text" placeholder="Имя">
                    <input v-model="newItem.phone" type="tel" placeholder="Телефон (+7)">
                </div>
                <select v-model="newItem.parentId" class="mb-1">
                    <option value="">Select parent</option>
                    <option v-for="item in items" :key="item.id" :value="item.id">{{ item.name }}</option>
                </select>
                <div class="d-flex justify-content-between">
                    <customButton @click="addItem" class="me-1">Save</customButton>
                    <customButton @click="closeModal">Cancel</customButton>
                </div>
            </div>
        </div>
    </transition>
</template>

  
<script>
// UI 
import customButton from '../UI/buttonCustom.vue'

export default {
    components: { customButton },
    computed: {
        showModal() {
            return this.$store.state.showModal
        },
        newItem() {
            return this.$store.state.newItem
        },
        items() {
            return this.$store.state.items
        }
    },
    methods: {
        addItem() {
            this.$store.commit('addItem', { ...this.newItem })
            this.$store.commit('setNewItem', { name: '', email: '', parent: null })
            this.closeModal()
        },
        closeModal() {
            this.$store.commit('setShowModal', false)
        }
    }
}
</script>

<style scoped>
.modal {
    position: fixed;
    background-color: #111111b3;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.modal .modal-content {
    background-color: #fff;
    padding: 30px 50px;
    border-radius: 5px;
}

.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.5s;
}

.modal-enter,
.modal-leave-to {
    opacity: 0;
}
</style>
  