import Vue from 'vue';
import vueResource from 'vue-resource';
import VueRouter from 'vue-router';
import App from './App.vue';

import topPage from './components/topPage.vue';
import moviePost from './moviePost/moviePost.vue';
import popMovies from './components/popMovies.vue';

//import './assets/application.js'
import 'icono'

Vue.use(vueResource);
Vue.use(VueRouter);

const routes = [
  { path: '/', component: topPage },
  { path: '/post/:ID', component: moviePost },
  { path: '/popMovies', component: popMovies },
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
