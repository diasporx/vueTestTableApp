<template>
  <div id="app">
    <div class="container">
      <!-- button  -->
      <custom-button @click="showModal = true" class="mb-3">
        Добавить пользователя
      </custom-button>
      <!-- Table  -->
      <Table />
      <!-- Modal  -->
      <Modal />
    </div>
  </div>
</template>

<script>
// Components
import Table from './components/__include/TableComponent.vue'
import Modal from './components/__include/Modal.vue'

// UI
import customButton from './components/UI/buttonCustom.vue'

export default {
  name: 'App',
  components: {Table,Modal,customButton},
  computed: {
    showModal: {
      get() {return this.$store.state.showModal},
      set(value) {this.$store.commit('setShowModal', value)}
    }
  }
}
</script>

<style>
@font-face {
  font-family: 'Ubuntu';
  src: url(./assets/font/Ubuntu-Regular.ttf);
  font-weight: 400;
}

@font-face {
  font-family: 'Ubuntu';
  src: url(./assets/font/Ubuntu-Bold.ttf);
  font-weight: 700;
}

@font-face {
  font-family: 'Ubuntu';
  src: url(./assets/font/Ubuntu-Light.ttf);
  font-weight: 300;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Ubuntu';
}

#app {
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.container {
  min-width: 768px;
  padding: 70px 0;
}

.align-items-center {
  align-items: center;
}

.justify-content-center {
  justify-content: center;
}

.justify-content-end {
  justify-content: flex-end;
}

.justify-content-between {
  justify-content: space-between;
}

.flex-column {
  flex-direction: column;
}

.d-flex {
  display: flex;
}

.mb-1 {
  margin-bottom: 10px;
}

.me-1 {
  margin-right: 10px;
}

.mb-2 {
  margin-bottom: 20px;
}

.mb-3 {
  margin-bottom: 30px;
}

input, select {
  padding: 15px 30px;
  border-radius: 5px;
  border: none;
  background-color: #e9e9ed;
  width: 100%;
  outline: none !important;
}
select option {
  font-weight: 700;
}
</style>
