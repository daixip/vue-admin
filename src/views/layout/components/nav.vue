<template>
    <div id='nav-wrap'>
        <div class='logo'>
            <img src="../../../assets/logo.png" alt="">
        </div>
        <el-menu 
            default-active="1" class="el-menu-vertical-demo"
            @open="handleOpen" @close="handleClose" :collapse="isCollapse" 
            background-color='transparent' text-color='white' router>
            <template v-for='(item,index) in routers'>
                <el-submenu v-if='!item.hidden' :key="index" :index="index+''">
                    <!-- 一级菜单 -->
                    <template slot="title">
                        <svg-icon :iconClass='item.meta.icon' :className='item.meta.icon'/>
                        <span slot="title">{{item.meta.name}}</span>
                    </template>
                    <!-- 子级菜单 -->
                    <el-menu-item-group v-for="(subItem,index) in item.children" :key='index'>
                        <el-menu-item :index="subItem.path" >{{subItem.meta.name}}</el-menu-item>
                    </el-menu-item-group>  
                </el-submenu>
            </template>
        </el-menu>
    </div>
</template>
<script>
    import main from '../../../styles/main.scss'
    export default{
        name:'navMenu',
        data(){
            return{
                routers:this.$router.options.routes,
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                // console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                // console.log(key, keyPath);
            }
        },
        computed:{
            isCollapse(){
                return this.$store.state.isCollapse
            }
        }
    }
</script>
<style lang='scss' scoped>
    #nav-wrap{
        position: fixed;
        top:0;
        left:0;
        width:$width;
        height: 100vh;
        background-color: #344a5f;
        svg{
            font-size: 30px;
            margin-right: 20px;
        }
    }
    .logo{
        width:97px;
        margin:20px auto;
        img{
            width:100%;
        }
    }
</style>
<style lang='scss'>
.el-submenu .el-menu-item{font-size:14px !important;padding-left: 50px !important}
.el-submenu .el-menu-item.is-active{
    background-color:rgba(245,108,108,0.3) !important;
    color:white !important;
}
.el-submenu.is-active.is-opened .el-submenu__title{background-color: $mainColor !important;}
</style>