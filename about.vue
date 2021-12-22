<template>
  <div id="about">

      <main-text v-for="text in mainTexts" v-bind:key="text.id" v-bind:text="text"></main-text>
      
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      text: 'about',
      mainTexts: [
                    { id: 1, path: "img/about_01.jpg", h2: '20代30代関東ゴルフサークル', p: `メンバー随時募集しています⛳️<br>同年代で初心者、経験者問わず、誰でもゴルフが好きな人が楽しめるサークルです。` },
                    { id: 1, path: "img/about_02.jpg", h2: '活動内容', p: `コンペ、ラウンド交流会、シミュレーションゴルフや練習会・飲み会、お花見、BBQなど` }
                ]
    }
  }
}
</script>

<style scoped>
  #about {
    width: 1200px;
    margin: 0 auto;
  }
</style>