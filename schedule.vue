<template>
  <div id="schedule" class="u-mt100">

        <h2 class="c-title__h2">schedule</h2>
        <ul>
            <schedule v-for="schedule in schedules" :key="schedule.id" :date="schedule.date" :location="schedule.location" :title="schedule.title" v-on:click.native="show(schedule.modal)"></schedule>
        </ul>


        <div v-if="$mq === 'lg'">
            <modal-template-pc v-for="modal in modals" :key="modal.id" v-bind:modal="modal"></modal-template-pc>
        </div>
        
        <div v-if="$mq === 'sm'">
            <modal-template-sp v-for="modal in modals" :key="modal.id" v-bind:modal="modal"></modal-template-sp>
        </div>

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
                                { id: 2, date: '2021-12-18', location: '大平台カントリークラブ', title: 'クリスマスコンペ', modal: 'hello-world2' },
                                { id: 3, date: '2022-01-30', location: '埼玉国際ゴルフ倶楽部', title: 'コンペ', modal: 'hello-world3' },
                                // { id: 4, date: '2021-11-27', location: '佐野ゴルフクラブ', title: '佐野コンペ', modal: 'hello-world4' },
                            ],
                modals: [
                    { id: 1, name: "hello-world1", title: '佐野コンペ', content: `11/27(土)　佐野ゴルフクラブコンペ<br><br>

                                                                                【費用】
                                                                                15000円

                                                                                【スタート時間】
                                                                                駒 IN　　　10時06分
                                                                                駒 OUT　　10時13分
                                                                                駒 IN　　　10時13分<br><br>

                                                                                【詳細】<br><br>
                                                                                生ビール小＋おつまみ付Pなし◆
                                                                                2組7名以上・駒コース昼食込

                                                                                都心から60分。山裾に広がる36ホールの雄大なゴルフ場です。<br><br>

                                                                                【競技方法 】<br><br>
                                                                                新ぺリア方式

                                                                                【ピックアップ】
                                                                                車お持ちの方はピックアップのご協力お願いします😊
                                                                                その際交通費は割り勘で、希望の方は運転手に負担がかからないよう指定の場所へ出向くなど、ご協力お願いします😊<br><br>

                                                                                【アクセス】<br><br>

                                                                                車
                                                                                最寄IC　北関東自動車道/佐野田沼IC 5 km (7分)

                                                                                電車
                                                                                ＪＲ両毛線 ・佐野駅 （両毛線・佐野駅）
                                                                                東武伊勢崎線 ・足利市駅 （東武伊勢崎線・足利市駅下車）
                                                                                ※電車で来る方はゴルフバックをゴルフ場へ郵送できます。

                                                                                タクシー
                                                                                佐野駅から15分 2000円
                                                                                足利市駅から20分 2200円

                                                                                クラブバス 
                                                                                なし<br><br>

                                                                                【キャンセルについて】<br><br>
                                                                                一週間前よりキャンセル料金が発生するので、お早めにご連絡お願いします。` },
                    { id: 2, name: "hello-world2", title: 'クリスマスコンペ', content: '' },
                    { id: 3, name: "hello-world3", title: '埼玉国際ゴルフ倶楽部', content: '9:30 東コーススタート<br><br>総額11700円' },
                    // { id: 1, name: "hello-world4", title: '佐野コンペ', content: 'hello-world4,' }
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
                    <button type="button" class="btn btn-outline-warning">詳細</button>
                   </li>
                   `
    })

    Vue.component('modal-template-pc', {
        props: ['modal'],
        template: `<modal v-bind:name="modal.name" :draggable="false" :resizable="false" scrollable="true" height="auto">
                        <div class="modal-header">
                            <h2>{{ modal.title }}</h2>
                        </div>
                        <div class="modal-body">
                            <p v-html="modal.content"></p>
                        </div>  
                   </modal>`
    })

    Vue.component('modal-template-sp', {
        props: ['modal'],
        template: `<modal v-bind:name="modal.name" :draggable="false" :resizable="false" width="100%" scrollable="true" height="400px">
                        <div class="modal-header">
                            <h2>{{ modal.title }}</h2>
                        </div>
                        <div class="modal-body">
                            <p v-html="modal.content"></p>
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
        padding: 25px;
    }
    .v--modal-box {
        overflow: scroll;
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