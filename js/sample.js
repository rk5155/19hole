const routes = [
  { path: '/', component: httpVueLoader('./home.vue') },
  { path: '/about', component: httpVueLoader('./about.vue') },
  { path: '/contact', component: httpVueLoader('./contact.vue') }
];

const router = new VueRouter({
  mode: "history",
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



new Vue({
  el: "#app",
  components: {
      Hooper: window.Hooper.Hooper,
      Slide: window.Hooper.Slide
  }
})