<template>
    <div>
        <img class="" src="img/main.jpeg" alt="">

        <div class="home">
            <div class="text-box">
                <div>
                    <h2>ゴルフで人と繋がる。</h2>
                    <p>
                        ゴルフを始めたけど、一緒に行く仲間がいない。<br>
                        たくさんの人に出会えるし、少しでも上手くなろうと一生懸命に練習する姿は美しい。<br>
                        同世代のゴルフ友達が欲しい。<br>
                        ゴルフを通してたくさんの知り合いが欲しい。<br>

                        Enjoy Golf!! 新しいゴルフが始まります。
                    </p>
                </div>

                <img src="img/img_01.jpg" alt="">
            </div>

            <div>
                <h2>schedule</h2>

                <ul>
                    <schedule v-for="schedule in schedules" :key="schedule.id" :date="schedule.date" :location="schedule.location" :title="schedule.title"></schedule>
                </ul>
            </div>

            <div class="member">
                <h2>Member</h2>
                <div id="member" class="container">
                    <div class="row">

                        <member v-for="member in members" v-bind:key="member.id" v-bind:title="member.title"></member>
                        
                    </div>
                </div>
            </div>
        </div>
        
        

    </div>
</template>

<script>
    module.exports = {
        data: function() {
            return {
                text: 'home',
                schedules: [
                    { id: 1, date: '2021-11-27', location: '佐野ゴルフクラブ', title: '佐野コンペ' },
                    { id: 2, date: '2021-12-24', location: '大平台カントリークラブ', title: 'クリスマスコンペ' },
                    { id: 3, date: '2021-11-27', location: '軽井沢カントリークラブ', title: 'ゴルフ合宿' },
                    { id: 4, date: '2021-11-27', location: '佐野ゴルフクラブ', title: '佐野コンペ' },
                ],
                members: [
                    { id: 1, title: 'title1' },
                    { id: 2, title: 'title2' },
                    { id: 3, title: 'title3' },
                    { id: 3, title: 'title4' },
                ]
            }
        }
    }

    Vue.component('member', {
        props: ['title'],
        template: '<div class="col-md-4 border "><h2>{{ title }}</h2></div>'
    })

    Vue.component('schedule', {
        props: ['date', 'location', 'title'],
        template: `<li>{{ date }} {{ location }} {{ title }}</li>`
    })

</script>

<style scoped>
    img {
        width: 100%;
        height: auto;
        background-color: black;
    }
    .home {
        width: 1200px;
        margin: 0 auto;
    }
</style>