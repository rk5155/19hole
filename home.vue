<template>
    <div id="home">
        <div class="home__img"  data-aos="fade-in" data-aos-offset="500" data-aos-easing="ease-in-sine" data-aos-once="true" data-aos-duration="1500">
            <img src="img/main_01.png" alt="">
            <div class="logo">
                <div><span class="logo--red">19</span><span class="logo--blue">HOLE</span><br></div>
                <span class="logo--yellow">GOLF</span>
            </div>
        </div>
        

        <div class="home">

            <!-- 親コンポーネント -->
            <!-- v-bind:text="text" 子コンポーネントのpropsにtextを渡す -->
            <main-text v-for="text in mainTexts" v-bind:key="text.id" v-bind:text="text">
                <router-link class="main-box__contact" to="/contact" exact>お問い合わせ</router-link>
            </main-text>

            <div>
                <h2 class="c-title__h2" style="margin: 0 26px 30px;">MAMBER</h2>

                <div class="p-alternate" v-for="member in members" :key="member.name" data-aos="fade-right" data-aos-offset="500" data-aos-easing="ease-in-sine" data-aos-once="true">
                    <img v-bind:src=member.img>
                    <div class="p-alternate__text">
                        <span>{{ member.furigana }}</span>
                        <h3>{{ member.name }}</h3>
                        <p v-html="member.text"></p>
                    </div>
                </div>

            </div>

            
        </div>

        <width title="LINE" address="https://lin.ee/xmjGRHc" text="公式LINEはこちら" id="contact"></width>

        <width title="Instagram" address="https://www.instagram.com/19hole_golf/" text="INSTAGRAM" id="instagram">日々の活動を投稿しています。</width>
    </div>
</template>

<script>
    module.exports = {
        data: function() {
            return {
                text: 'home',
                members: [
                    { 
                        img: '/img/r_k.png',
                        furigana: '19HOLE代表', 
                        name: '川T', 
                        text: 'アベレージスコア: 110<br>ゴルフ歴: 1年<br>代表なのにまったく上手くなりません。代表が下手なので初心者の方も気軽に入会してください😊'
                    },
                    { 
                        img: '/img/img_03.jpg',
                        furigana: 'GPSが付いています', 
                        name: 'Yu-zi', 
                        text: 'アベレージスコア: 120<br>ゴルフ歴: 1年<br>高校時代は野球部に所属しており、エースとして活躍していました😊ゴルフもそれなりにセンスあると思います。一緒に上達しましょう。'
                    },
                    { 
                        img: '/img/img_07.jpg',
                        furigana: 'JYEI', 
                        name: 'ジェイ', 
                        text: 'アベレージスコア: 100<br>ゴルフ歴: ７年<br>東京に越してきてゴルフ友達がいなくゴルフできる環境を探してました。よろしくお願い致します🤲'
                    },
                    { 
                        img: '/img/img_10.jpg',
                        furigana: 'HARUNA', 
                        name: 'はるな', 
                        text: 'アベレージスコア: 115<br>ゴルフ歴: 1年<br>宜しくお願い致します🏌🏻‍♀'
                    },
                    { 
                        img: '/img/img_11.jpg',
                        furigana: 'ARISA', 
                        name: 'アイリシャ', 
                        text: 'アベレージスコア: --<br>ゴルフ歴: 1ヶ月<br>早く上手くなりたくて週４くらいでゴルフの練習頑張ってます💪土日より平日の方が時間作りやすいです。よろしくお願いします✨✨'
                    },
                    { 
                        img: '/img/img_12.jpg',
                        furigana: 'NANA', 
                        name: 'なな', 
                        text: 'アベレージスコア: 150<br>ゴルフ歴: 半年<br>初心者ですがよろしくお願いいたします！！！😊⛳️'
                    },
                    { 
                        img: '/img/img_13.jpg',
                        furigana: 'AKANE', 
                        name: 'あかね', 
                        text: 'アベレージスコア: 来月コースデビューです！<br>ゴルフ歴: 半年<br>最近ゴルフ始めました！来月コースデビューの初心者ですがよろしくお願いします🏌️‍♀'
                    },
                    { 
                        img: '/img/img_04.jpg',
                        furigana: 'ハンマーヘッドシャーク', 
                        name: 'かずま', 
                        text: '主に私は平日休みで一緒にコースまわるのはたまの土日休みのときになってしまうかと思いますが楽しくゴルフできたらと思います🏌️‍♂️よろしくお願いします！'
                    },
                    { 
                        img: '/img/img_05.jpg',
                        furigana: '男はつらいよ', 
                        name: 'ダルビッシュ祐真', 
                        text: 'アベレージスコア: 120<br>ゴルフ歴: 1年<br>まだまだ下手ですが、一緒に楽しみましょう！'
                    },
                    { 
                        img: '/img/img_06.jpg',
                        furigana: 'HITOSHI MATSUMOTO', 
                        name: '大ちゃん', 
                        text: 'アベレージスコア: 120<br>ゴルフ歴: 1年<br>まだまだ下手ですが、一緒に楽しみましょう！'
                    },
                    { 
                        img: '/img/img_02.jpg',
                        furigana: 'HIKARU', 
                        name: 'ひかる', 
                        text: 'アベレージスコア: 90台<br>ゴルフ歴: 5年<br>5年やっていましたが、6年近くブランクあってここ最近始めました！よろしくお願いします！'
                    },
                    { 
                        img: '/img/img_08.jpg',
                        furigana: 'TAKUMI', 
                        name: 'たくみ', 
                        text: 'アベレージスコア: 90台前半<br>ゴルフ歴: 4年<br>はじめまして！参加させていただきました！基本土日にラウンドにいくことが多いです！これからよろしくお願いいたします！'
                    },
                    { 
                        img: '/img/img_14.jpg',
                        furigana: 'KOTOMI', 
                        name: 'ことみ', 
                        text: 'アベレージスコア: 110<br>ゴルフ歴: 3年<br>最近やっとゴルフが楽しくなってきて色々な場所でラウンド回りたいです！よろしくお願いします！'
                    },
                    { 
                        img: '/img/img_09.jpg',
                        furigana: 'NAO', 
                        name: 'なお', 
                        text: 'アベレージスコア: 140<br>ゴルフ歴: 二ヶ月くらい<br>初心者ですが、よろしくお願いします！'
                    },
                    { 
                        img: '/img/img_03.jpg',
                        furigana: 'HIROSHI', 
                        name: 'ひろし', 
                        text: 'アベレージスコア: 97<br>ゴルフ歴: 1年<br>上手くはありませんが、最近ゴルフにハマりゴルフ仲間募集中です。よろしくお願いします！'
                    },
                    { 
                        img: '/img/img_04.jpg',
                        furigana: 'JYUN', 
                        name: 'ジュン', 
                        text: 'アベレージスコア: 105<br>ゴルフ歴: 1年半<br>いろんな場所でゴルフができたらなと思います！よろしくお願いします！'
                    },
                    { 
                        img: '/img/img_05.jpg',
                        furigana: 'TETSU', 
                        name: 'てっちゃん', 
                        text: 'アベレージスコア: 100〜110<br>ゴルフ歴: 2年<br>上京三年目で友達が少ないので是非サークルを通じて交流できればと思います！よろしくお願いします！'
                    },
                    { 
                        img: '/img/img_06.jpg',
                        furigana: 'KAZUYA', 
                        name: 'かずちゃん', 
                        text: 'アベレージスコア: 108<br>ゴルフ歴: 5年<br>長いことゴルフはやっていますが、熱をもってやり出したのは今年からです。仕事は平日土日関係なく休みが取れるので比較的参加はできると思います。何卒宜しくお願いします！'
                    },

                    { 
                        img: '/img/img_03.jpg',
                        furigana: 'TAKAHIRO', 
                        name: 'たかひろ', 
                        text: 'アベレージスコア: 102.3位<br>ゴルフ歴: 半年<br>大学生です。今はアベレージで100切ることと80台を出すことを目覚ましてます！よろしくお願いします！'
                    }

                ],
                mainTexts: [
                    { id: 1, path: "img/img_01.jpg", h2: '20代30代関東ゴルフサークル', p: `メンバー随時募集しています⛳️<br>同年代で初心者、経験者問わず、誰でもゴルフが好きな人が楽しめるサークルです。` },
                ]
            }
        }
    }

</script>

<style scoped>
    .home__img {
        position: relative;
    }
    .logo {
        font-size: 210px;
        text-align: center;
        position: absolute;
        top: 43%;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);
        margin: auto;
        padding: 40px 20px;
        font-weight: bold;
        letter-spacing: 0.04em;
        line-height: 1;
        font-family: 'Caveat', cursive;
    }
    .logo--red {
        color: palevioletred;
    }
    .logo--blue {
        color: #0B0B61;
    }
    .logo--yellow {
        color: #E6E28B;
    }
    img {
        width: 100%;
        height: auto;
        background-color: black;
    }
    .home, .contact__inner {
        width: 1200px;
        margin: 0 auto;
    }
    @media screen and (max-width: 580px) {
        #home .logo {
            font-size: 70px;
        }
    }
    .main-box__contact {
        border: 1px solid palevioletred;
        border-radius: 8px;
        padding: 14px 26px;
        display: inline-block;
        color: palevioletred;
        margin-top: 20px;
    }
</style>