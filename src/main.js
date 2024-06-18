import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import VCalendar from 'v-calendar';

Vue.use(VCalendar);

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
  render: h => h(App)
}).$mount('#app')
