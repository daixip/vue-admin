<template>
    <div id='main-wrap'>
        <router-view/>
        控制台
    </div>
</template>
<script>
    export default{}
</script>
<style lang='scss' scoped>
    #main-wrap{
        position: fixed;
        left:250px;
        right:0;
        top:75px;
        height: 100vh;
        -webkit-box-sizing: border-box;
        border-left:30px solid #f7f7f7;
        border-right:30px solid #f7f7f7;
        border-top:30px solid #f7f7f7;
        background-color: #fff;
    }
</style>