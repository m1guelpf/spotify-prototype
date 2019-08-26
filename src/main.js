import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import App from './App.vue';
import './registerServiceWorker';
import './tailwind.less';

Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
  routes,
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
