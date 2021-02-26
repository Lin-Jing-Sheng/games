
<template>
  <div class="app-container">
    <div class="images" :style="{backgroundImage: 'url('+imageUrl+')'}"></div>
  </div>
</template>
<script>
export default {
    props:['imageUrl'],
    data(){
        return{
            
        }
    },
    methods:{
        
    }
}
</script>
<style>
.images{
    /* background-image: url('/img/bg/sky.jpg'); */
    background-repeat: no-repeat;
    background-size: cover;
    opacity:0.8;
    position: fixed;
    width:100%;
    height:1000px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
    z-index:10000;
}
</style>