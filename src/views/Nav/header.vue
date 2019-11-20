<template>
    <div class='header'>
        <div>
            <img src="../../assets/img/menu.png" alt="">
        </div>
        <div class="user">
            <ul>
                <li>
                    <img src="../../assets/img/user.png" alt="">
                </li>
                <li>
                    <span>
                        管理员
                    </span>
                </li>
                <li>
                    <a href="">
                        <img src="../../assets/img/logout.png" alt="">
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default{

    }
</script>
<style scoped lang='scss'>
.header{
    height: 75px;
    position: fixed;
    left:250px;
    width:100%;
    line-height: 70px;
    div{
        display: inline-block;
    }
    .user{
        width:10%;
        float: right;
        position: fixed;
        right: 30px;
        ul{
            display:flex;
            justify-content: space-between;
            span{vertical-align: middle};
            img{vertical-align: middle}
        }
    }
}
</style>