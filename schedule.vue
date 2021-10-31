<template>
  <div id="schedule" class="u-mt100">

        <h2 class="c-title__h2">schedule</h2>
        <ul>
            <schedule v-for="schedule in schedules" :key="schedule.id" :date="schedule.date" :location="schedule.location" :title="schedule.title" v-on:click.native="show(schedule.modal)"></schedule>
        </ul>

        <modal-template v-for="modal in modals" :key="modal.id" v-bind:modal="modal"></modal-template>

  </div>
</template>

<script>
const { log }=require("console");

    

    module.exports = {
        data: function() {
            return {
            text: 'Schedule',
                schedules: [
                                { id: 1, date: '2021-11-27', location: '佐野ゴルフクラブ', title: '佐野コンペ', modal: 'hello-world1' },
                                { id: 2, date: '2021-12-24', location: '大平台カントリークラブ', title: 'クリスマスコンペ', modal: 'hello-world2' },
                                { id: 3, date: '2021-11-27', location: '軽井沢カントリークラブ', title: 'ゴルフ合宿', modal: 'hello-world3' },
                                { id: 4, date: '2021-11-27', location: '佐野ゴルフクラブ', title: '佐野コンペ', modal: 'hello-world4' },
                            ],
                modals: [
                    { id: 1, name: "hello-world1", title: '佐野コンペ', content: 'hello-world1' },
                    { id: 1, name: "hello-world2", title: 'クリスマスコンペ', content: 'hello-world2' },
                    { id: 1, name: "hello-world3", title: 'ゴルフ合宿', content: 'hello-world3' },
                    { id: 1, name: "hello-world4", title: '佐野コンペ', content: 'hello-world4,' }
                ]
            }
        },
        methods: {
            show : function(ele) {
                this.$modal.show(ele);
            },
            hide : function (ele) {
                this.$modal.hide(ele);
            }
        }
    }

    Vue.component('schedule', {
        props: ['date', 'location', 'title'],
        template: `<li>
                    <span>{{ date }}</span>
                    <span>{{ location }}</span>
                    <span>{{ title }}</span>
                   </li>
                   `
    })

    Vue.component('modal-template', {
        props: ['modal'],
        template: `<modal v-bind:name="modal.name" :draggable="false" :resizable="true">
                        <div class="modal-header">
                            <h2>{{ modal.title }}</h2>
                        </div>
                        <div class="modal-body">
                            <p>{{ modal.content }}</p>
                        </div>  
                   </modal>`
    })



    
</script>

<style scoped>
    #schedule {
        width: 1200px;
        margin: 0 auto;
    }
    #schedule ul {
        padding: 0;
    }

    .modal-header, .modal-body {
        padding: 5px 25px;
    }
    .modal-header {
        border-bottom: 1px solid #ddd;
    }

    #schedule li {
        border-bottom: 2px solid #E5E5E5;
        padding: 30px 0;
        list-style: none;

    }
    #schedule li span {
        width: 300px;
        display: inline-block;
    }
</style>