const routes = [
  { path: '/home', component: httpVueLoader('./home.vue') },
  { path: '/about', component: httpVueLoader('./about.vue') },
  { path: '/contact', component: httpVueLoader('./contact.vue') }
];

const router = new VueRouter({
  routes
});

new Vue({
  el: '#header',
  router: router
});

new Vue({
  el: '#main',
  router: router
});



