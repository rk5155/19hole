const routes = [
  { path: '/', component: httpVueLoader('./home.vue') },
  { path: '/about', component: httpVueLoader('./about.vue') },
  { path: '/schedule', component: httpVueLoader('./schedule.vue') },
  { path: '/contact', component: httpVueLoader('./contact.vue') }
];

const router = new VueRouter({
  routes
});

const VueMq = window['vueMq'];

const VueSmoothScroll = window['VueSmoothScroll'];

Vue.use(VueSmoothScroll);

Vue.use(VueMq, {
  breakpoints: {
    sm: 600,
    lg: Infinity,
  },
  defaultBreakpoint: 'sm'
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
                    <slot></slot>
                </div>
                <img v-bind:src="text.path">
              </div>`
})

Vue.component('width', {
  props: ['title', "id", "address", "text"],
  template: `<div v-bind:id="id" class="width">
                <div class="contact__inner">
                    <h2>{{ title }}</h2>
                    <p><slot>お問い合わせは下記、<br>もしくはInstagramよりお願いいたします。</slot></p>
                    <a v-bind:href="address">{{ text }}</a>
                </div>
              </div>`
})


const VModal = window["vue-js-modal"].default
Vue.use(VModal);
new Vue({
  el: '#app2',
  methods: {
    show : function() {
      this.$modal.show('hello-world');
    },
    hide : function () {
      this.$modal.hide('hello-world');
    },
  }
})
AOS.init();

// bootstrap ヘッダーのメニューをスマホときにクリックしたら閉じる
$(document).ready(function () {
  $('.navbar-nav li a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
  });
});
