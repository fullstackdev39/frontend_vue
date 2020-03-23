<template>
    <CustomerComponent msg="Welcome to Your Vue.js App"/>
</template>
<script>
import CustomerComponent from '../components/CustomerComponent.vue'

export default {
  name: 'home',
  components: {
    CustomerComponent,
  }
}
</script>