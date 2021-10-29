const routes = [
  { path: '/', component: httpVueLoader('./home.vue') },
  { path: '/about', component: httpVueLoader('./about.vue') },
  { path: '/schedule', component: httpVueLoader('./schedule.vue') },
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


// 子コンポーネント
Vue.component('main-text', {
  props: ['text'],
  template: `<div class="text-box">
                <div>
                    <h2>{{ text.h2 }}</h2>
                    <p v-html="text.p"></p>
                </div>

                <img v-bind:src="text.path">
              </div>`
})