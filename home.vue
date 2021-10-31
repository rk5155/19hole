<template>
    <div>
        <img class="" src="img/main.jpeg" alt="">

        <div class="home">

            <!-- 親コンポーネント -->
            <!-- v-bind:text="text" 子コンポーネントのpropsにtextを渡す -->
            <main-text v-for="text in mainTexts" v-bind:key="text.id" v-bind:text="text"></main-text>

            <div>
                <h2 class="c-title__h2">MAMBER</h2>

                <div class="p-alternate" v-for="member in members" :key="member.name">
                    <img v-bind:src=member.img>
                    <div class="p-alternate__text">
                        <span>{{ member.furigana }}</span>
                        <h3>{{ member.name }}</h3>
                        <p>
                            {{ member.text }}
                        </p>
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
                members: [
                    { 
                        img: '/img/img_01.jpg',
                        furigana: 'KAWATA RYUKI', 
                        name: '川田 隆稀', 
                        text: '19HOLE GOLF 代表取締役 シニアルーキーの2010年「富士フィルムシニアチャンピオンシップ」で初優勝を飾り、2000年のレギュラーツアー「東建カップ」以来10年ぶりの勝利を挙げた。レギュラーツアーの初優勝は1987年の「日経カップ」で、96年には「日本プロマッチプレー」で初の日本タイトルを手にしている。高校時代はスキーの選手として国体に出場した経験も持つ。藤田寛之、宮本勝昌などの師匠であり、"チーム芹澤"の長としてテレビ解説などでも活躍中。2015年の「meijiカップ」では西山ゆかりのキャディを務め、西山のツアー初優勝を支えた。'
                    },
                    { 
                        img: '/img/main.jpeg',
                        furigana: 'ARAI YUji', 
                        name: '荒井 祐二', 
                        text: 'シニアルーキーの2010年「富士フィルムシニアチャンピオンシップ」で初優勝を飾り、2000年のレギュラーツアー「東建カップ」以来10年ぶりの勝利を挙げた。レギュラーツアーの初優勝は1987年の「日経カップ」で、96年には「日本プロマッチプレー」で初の日本タイトルを手にしている。高校時代はスキーの選手として国体に出場した経験も持つ。藤田寛之、宮本勝昌などの師匠であり、"チーム芹澤"の長としてテレビ解説などでも活躍中。2015年の「meijiカップ」では西山ゆかりのキャディを務め、西山のツアー初優勝を支えた。'
                    },
                    { 
                        img: '/img/img_01.jpg',
                        furigana: 'HASHIMOTO KAZUMA', 
                        name: '橋本 和馬', 
                        text: 'シニアルーキーの2010年「富士フィルムシニアチャンピオンシップ」で初優勝を飾り、2000年のレギュラーツアー「東建カップ」以来10年ぶりの勝利を挙げた。レギュラーツアーの初優勝は1987年の「日経カップ」で、96年には「日本プロマッチプレー」で初の日本タイトルを手にしている。高校時代はスキーの選手として国体に出場した経験も持つ。藤田寛之、宮本勝昌などの師匠であり、"チーム芹澤"の長としてテレビ解説などでも活躍中。2015年の「meijiカップ」では西山ゆかりのキャディを務め、西山のツアー初優勝を支えた。'
                    }
                ],
                mainTexts: [
                    { id: 1, path: "img/img_01.jpg", h2: 'ゴルフで人と繋がる。', p: `ゴルフを始めたけど、一緒に行く仲間がいない。<br>たくさんの人に出会えるし、少しでも上手くなろうと一生懸命に練習する姿は美しい。<br>同世代のゴルフ友達が欲しい。<br>ゴルフを通してたくさんの知り合いが欲しい。<br>Enjoy Golf!! 新しいゴルフが始まります。` }
                ]
            }
        }
    }

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