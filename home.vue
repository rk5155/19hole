<template>
    <div>
        <b>{{ text }}</b>
            
        <div id="member" class="container">
            <div class="row">
                



                <member title="title1"></member>
                <member title="title2"></member>
                <member title="title3"></member>

                
                
            </div>
            
        </div>

        
    </div>
</template>

<script>
    module.exports = {
        data: function() {
            return {
            text: 'home'
            }
        }
    }

    Vue.component('member', {
        props: ['title'],
        template: '<div id="member" class="col-md-4"><h2>{{ title }}</h2></div>'
    })

</script>
