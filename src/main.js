import Vue from 'vue';
import vueResource from 'vue-resource';
import VueRouter from 'vue-router';
import App from './App.vue';

import topPage from './components/topPage.vue';
import moviePost from './moviePost/moviePost.vue';
import TP from './components/testpage.vue';

Vue.use(vueResource);
Vue.use(VueRouter);

const routes = [
  { path: '/', component: topPage },
  { path: '/post/:ID', component: moviePost },
  { path: '/TP', component: TP },
]

const router = new VueRouter({
  routes: routes,
  mode: 'history',
});

Vue.config.productionTip = false

import 'reset-css';
require('@/assets/style/common.css')

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')