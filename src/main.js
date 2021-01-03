import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router/index';

Vue.filter('grana', function (value) {
  if (typeof value !== 'number') { return value; }

  value = value.toFixed(2);
  return `R$ ${value}`;
});

Vue.filter('pergunta', function (value) {
  if (value === undefined) { return 'Não'; }
  if (typeof value !== 'boolean') { return value; }

  return value ? 'Sim' : 'Não';
});

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  el: '#app',
  render: h => h(App)
});
