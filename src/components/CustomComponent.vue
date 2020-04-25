<template>
     <div id = "counter-event-example" class="btn_wrapper">
            <button
            v-on:click = "displayLanguage(item)"
            ><span style = "font-size:25px;">{{ item }}</span></button>
         </div>
</template>

<script type = "text/javascript" src = "../js/vue.js"></script>
<script type = "text/javascript">

import Vue from 'vue/dist/vue.js'

export default {
    data: function() {
        return {
        }
    },

    methods: {
        displayLanguage: function (lng) {
            console.log(lng);
            this.$emit('showlanguage', lng); // showlanguage is function of parent component 
        }

    },

    props:['item'], // props receiving
};
        
</script>

<style>

.btn_wrapper {
    display:inline-block;
}

</style>