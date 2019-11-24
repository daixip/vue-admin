<template>
    <div id='main-wrap'>
        <router-view/>
    </div>
</template>
<script>
    import main from '../../../styles/main.scss'
    export default{}
</script>
<style lang='scss' scoped>
    #main-wrap{
        position: fixed;
        left:$width;
        right:0;
        top:75px;
        height: 100vh;
        -webkit-box-sizing: border-box;
        border-left:30px solid #f7f7f7;
        border-right:30px solid #f7f7f7;
        border-top:30px solid #f7f7f7;
        background-color: #fff;
        padding:30px 30px 0 30px;
    }
</style>