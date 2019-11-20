<template>
    <div>
        <layoutHeader/>
        <layoutMain/>
        <layoutNav/>
    </div>
</template>
<script>
    import layoutHeader from './components/header.vue'
    import layoutMain from './components/main.vue'
    import layoutNav from './components/nav.vue'
    export default{
        name:'layout',
        components:{
            layoutHeader,
            layoutMain,
            layoutNav
        }
    }
</script>
<style lang='scss' scoped>
</style>