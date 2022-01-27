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
                    { id: 1, path: "img/about_01.jpg", h2: 'サークルで人と繋がる。', p: `ゴルフを始めたけど、一緒に行く仲間がいない。<br>たくさんの人に出会えるし、少しでも上手くなろうと一生懸命に練習する姿は美しい。<br>同世代のゴルフ友達が欲しい。<br>ゴルフを通してたくさんの知り合いが欲しい。<br>Enjoy Golf!! 新しいゴルフが始まります。` },
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