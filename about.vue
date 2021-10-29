<template>
  <div>
      <b>{{ text }}</b>

      <main-text v-for="text in mainTexts" v-bind:key="text.id" v-bind:text="text"></main-text>
      
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      text: 'about',
      mainTexts: [
                    { id: 1, path: "img/img_01.jpg", h2: 'ゴルフで人と繋がる。', p: `ゴルフを始めたけど、一緒に行く仲間がいない。<br>たくさんの人に出会えるし、少しでも上手くなろうと一生懸命に練習する姿は美しい。<br>同世代のゴルフ友達が欲しい。<br>ゴルフを通してたくさんの知り合いが欲しい。<br>Enjoy Golf!! 新しいゴルフが始まります。` }
                ]
    }
  }
}
</script>