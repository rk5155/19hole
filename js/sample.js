// コンポーネント版
// Vue.component('header-list', {
//     props: ['title'],
//     template: '<li>{{ title }}</li>'
// })

new Vue({
    el: '#header',
    data: {
      lists: [
        { id: 1, title: 'ABOUT' },
        { id: 2, title: 'MEMBER' },
        { id: 3, title: 'CONTACT' }
      ]
    }
})

const routes = [
  { path: '/foo', component: httpVueLoader('./foo.vue') },
  { path: '/bar', component: httpVueLoader('./bar.vue') }
];

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router: router
});