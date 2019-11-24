<template>
    <div id='header-wrap'>
        <div class='pull-left header-icon' @click='navMenuState'>
            <svg-icon iconClass='menu' className='menu'/>
        </div>
        <div class='pull-right'>
            <div class='user-info pull-left'>
              <div class="pull-left">
                  <img src="@/assets/img/user.png" alt="">
              </div>
              <h5 class='pull-right actor'>管理员</h5>
            </div>
            <div class='header-icon pull-right'>
                <svg-icon iconClass='logout' className='logout'/>
            </div>
        </div>
    </div>
    </template>
<script>
    import main from '../../../styles/main.scss'
    export default{
        data(){
            return  {
                
            }
        },
        methods:{
            navMenuState(){
                this.$store.commit('SET_COLLAPSE')
            }
        }
    }
</script>
<style lang='scss' scoped>
    #header-wrap{
        position:fixed;
        top:0;
        left:$width;
        right:0;
        height:75px;
        line-height:75px;
        background-color: #fff;
        -webkit-box-shadow:0 3px 16px 0 rgba(0,0,0,0.1)
    }
    .header-icon{
        padding:0 32px;
        svg{font-size:25px;
            margin-bottom:-8px;
            cursor: pointer;
        }
    }
    .user-info{
        border-right:1px solid #ededed;
        height:100%;
        padding-right:20px;
        + .header-icon{
            padding:0 28px;
        }
        img{
            vertical-align: middle;
            padding-right: 32px;
        }
    }
</style>