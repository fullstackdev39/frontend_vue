import Vue from 'vue'
import App from './App.vue'
import router from  './routers'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 2
  },
  mutations: {
    increment: state => {
      state.counter++;
    }
  }
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
