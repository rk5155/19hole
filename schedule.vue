<template>
  <div id="schedule">

        <h2>schedule</h2>
        <ul>
            <schedule v-for="schedule in schedules" :key="schedule.id" :date="schedule.date" :location="schedule.location" :title="schedule.title" v-on:click.native="show(schedule.modal)"></schedule>
        </ul>

        <modal name="hello-world1" :draggable="true" :resizable="true">
            <div class="modal-header">
                <h2>Modal title</h2>
            </div>
            <div class="modal-body">
                <p>you're reading this text in a modal!</p>
                <button v-on:click="hide">閉じる</button>
            </div>  
        </modal>

        <modal name="hello-world2" :draggable="true" :resizable="true">
            <div class="modal-header">
                <h2>222222</h2>
            </div>
            <div class="modal-body">
                <p>you're reading this text in a modal!</p>
                <button v-on:click="hide">閉じる</button>
            </div>  
        </modal>

        <modal name="hello-world3" :draggable="true" :resizable="true">
            <div class="modal-header">
                <h2>33333</h2>
            </div>
            <div class="modal-body">
                <p>you're reading this text in a modal!</p>
                <button v-on:click="hide">閉じる</button>
            </div>  
        </modal>

        <modal name="hello-world4" :draggable="true" :resizable="true">
            <div class="modal-header">
                <h2>444444</h2>
            </div>
            <div class="modal-body">
                <p>you're reading this text in a modal!</p>
                <button v-on:click="hide">閉じる</button>
            </div>  
        </modal>

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
                        ]
            }
        },
        methods: {
            show : function(ele) {
            this.$modal.show(ele);
            },
            hide : function () {
            this.$modal.hide('hello-world');
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



    
</script>

<style scoped>
    #schedule {
        width: 1200px;
        margin: 0 auto;
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