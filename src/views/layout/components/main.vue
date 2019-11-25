<template>
    <div id='main-wrap'>
        <div class='main-content'>
            <div class='content'>
                <router-view/>
            </div>
        </div>
    </div>
</template>
<script>
    import main from '../../../styles/main.scss'
    export default{}
</script>
<style lang='scss' scoped>
    #main-wrap{
        height: 100vh;
    }
    .main-content{
        width:100%;
        height: 100%;
        padding-top: $layoutHeader+30;
        padding-left:$width+30;
        padding-right:30px;
        -webkit-box-sizing:border-box;
        box-sizing:border-box;
        @include webkit(transition, all .3s ease 0s);
    }
    .content{
        width:100%;
        height:100%;
        padding: 30px 30px 0 30px;
        background-color: #fff;
        -webkit-box-sizing:border-box;
        box-sizing:border-box;
    }
    .open{
        .main-content{
            padding-left:$width+30; 
        }  
    }
    .closed{
        .main-content{
            padding-left:$navMenuMin+30; 
        } 
    }
</style>