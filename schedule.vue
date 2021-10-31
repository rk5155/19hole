<template>
  <div id="schedule">

      <h2>schedule</h2>
      <ul>
        <schedule v-for="schedule in schedules" :key="schedule.id" :date="schedule.date" :location="schedule.location" :title="schedule.title"></schedule>
      </ul>
      

      <div id="app2">
            <button v-on:click="show" class="button">show!</button>
            <modal name="hello-world" :draggable="true" :resizable="true">
                <div class="modal-header">
                    <h2>Modal title</h2>
                </div>
                <div class="modal-body">
                    <p>you're reading this text in a modal!</p>
                    <button v-on:click="hide">閉じる</button>
                </div>  
            </modal>
       </div> 



      

      
  </div>
</template>

<script>
    

    module.exports = {
        data: function() {
            return {
            text: 'Schedule',
            schedules: [
                            { id: 1, date: '2021-11-27', location: '佐野ゴルフクラブ', title: '佐野コンペ' },
                            { id: 2, date: '2021-12-24', location: '大平台カントリークラブ', title: 'クリスマスコンペ' },
                            { id: 3, date: '2021-11-27', location: '軽井沢カントリークラブ', title: 'ゴルフ合宿' },
                            { id: 4, date: '2021-11-27', location: '佐野ゴルフクラブ', title: '佐野コンペ' },
                        ]
            }
        },
        methods: {
            show : function() {
            this.$modal.show('hello-world');
            },
            hide : function () {
            this.$modal.hide('hello-world');
            },
        }
    }



    
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
</style>