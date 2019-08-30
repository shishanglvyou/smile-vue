<template>
    <div>
        <div class="main-div">
            <keep-alive>
                <router-view />
            </keep-alive>
        </div>
        <van-tabbar v-model="active">
            <van-tabbar-item icon="shop" to="/ShoppingMall">首页</van-tabbar-item>
            <van-tabbar-item icon="records" to="/CategoryList">列表</van-tabbar-item>
            <van-tabbar-item icon="cart" to="/Cart">购物车</van-tabbar-item>
            <van-tabbar-item icon="contact" to="/Mine">会员中心</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    export default {
       data() {
           return {
               active: 0,
               nowPath:'',  //当前路径
           }
       },
       created(){
           this.changeTabBarActive()
       },
       updated(){
           this.changeTabBarActive()
       },
       methods: {
           changeTabBarActive(){
               this.nowPath = this.$route.path
               if(this.nowPath=='/Cart'){
                   this.active=2
               }
           }
       },
    }
</script>

<style scoped>

</style>
