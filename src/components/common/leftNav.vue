<template>
    <div class="left-nav">
        <ul>
            <li>
                <i class="icon iconfont icon-gouwuche2"></i>
                <div>商品</div>
            </li>
            <li>
                <i class="icon iconfont icon-huiyuanqia"></i>
                <div>会员</div>
            </li>
            <li>
                <i class="icon iconfont icon-dianpu"></i>
                <div>店铺</div>
            </li>
            <li>
                <i class="icon iconfont icon-goumai"></i>
                <div>结账</div>
            </li>
            <li>
                <i class="icon iconfont icon-gongnengjianyi"></i>
                <div>设置</div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                name:'leftNav'
            }
        }
    }
</script>
<style>
.left-nav{
    width: 5%;
    color: #fff;
    background-color: #1D8ce0;
    height: 100%;
    float: left;
}
.iconfont{
    font-size: 24px;
}
.left-nav ul{
    padding: 0;
    margin: 0;
}
.left-nav ul li{
    text-align: center;
    border-bottom: 1px solid #20a0ff;
    padding: 10px;
    list-style: none;
}

</style>