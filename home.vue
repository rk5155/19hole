<template>
    <div>
        <b>{{ text }}</b>
            
        <div id="member" class="container">
            <div class="row">

                <member v-for="member in members" v-bind:key="member.id" v-bind:title="member.title"></member>
                
            </div>
        </div>

        <div id="app">
        <hooper :auto-play="true" :play-speed="2000">
      
          <slide>
            slide 1
          </slide>
          <slide>
            slide 2
          </slide>
          <slide>
            slide 3
          </slide>
          <slide>
            slide 4
          </slide>
        </hooper>
      </div>

      

        
    </div>
</template>

<script>
    module.exports = {
        data: function() {
            return {
                text: 'home',
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
        template: '<div class="col-md-4"><h2>{{ title }}</h2></div>'
    })

</script>
