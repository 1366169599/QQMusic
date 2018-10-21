<style lang="less" scoped>
.music-room{
.top-bar {
  background: cyan;
  height: 80px;
  display: flex;
  justify-content: space-between;
    .img-cont-lift{
      width: 80px;
      height: 80px;
      display: flex;
      align-items: center;
      img{
        width: 50%;
        height: 50%;
      }
    }
     .img-cont-right{
      width: 80px;
      height: 80px;
      display: flex;
      align-items: center;
      flex-direction:row-reverse;
      img{
        width: 50%;
        height: 50%;
      }
    }
    .tab {
      display: flex;
      font-size: 23px;
      line-height: 80px;
      p{
        padding: 0 5px;
      }
      .show{
        color: aliceblue;
      }
    }
}
.search {
  input {
    display: block;
    width: 100%;
    height: 50px;
    text-align: center;
    background: aquamarine;
    border: none;
    outline: none;
  }
}
.menu {
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 80%;
  transition: all 0.5s;
  &.out {
    margin-left: -80%;
  }
  &.in {
    margin-left: 0;
  }
  .set-container {
    height: 90%;
    overflow: auto;
    background: rgb(251, 253, 253);
    .set {
      margin-top: 50px;
      p {
        margin: 10px;
      }
    }
  }

  .fix-bottom {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 10%;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    background: rgb(182, 243, 233);
    span {
      display: inline-block;
    }
  }
}
.mask {
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: black;
  opacity: 0.4;
}}
</style>

<template>
  <div class="music-room">
    <div class="top-bar">

        <div class="img-cont-lift"><img src="../assets/菜单.png" alt="" @click="setting"></div>
        
          <div class="tab">
            <p @click="tabChange(0)" :class="{'show':tabShow==0}">我的</p>
            <p @click="tabChange(1)" :class="{'show':tabShow==1}">音乐馆</p>
            <p @click="tabChange(2)" :class="{'show':tabShow==2}">发现</p>
          </div>
        
      <div class="img-cont-right"><img src="../assets/add.png" alt=""></div>

    </div>

    <router-link class="search" to='search'>
      <input type="text" placeholder="搜索">
    </router-link>

    <div class="mask" v-if="show" @click="hide"></div>
    <div class="menu" :class='{"out":!show,"in": show}'>
      <div class="set-container">
        <div class="set">
          <div class="">
            <p>个性装扮
              <span>默认套装</span>
            </p>
          </div>
          <p>消息中心</p>
          <div class="">
            <p>免流量服务
              <span>王卡听歌免流量</span>
            </p>
          </div>
        </div>
        <div class="set">
          <p>定时开关</p>
          <p>仅Wi-Fi联网</p>
          <p>流量提醒</p>
          <p>听歌偏好</p>
        </div>
        <div class="set">
          <p>定时开关</p>
          <p>仅Wi-Fi联网</p>
          <p>流量提醒</p>
          <p>听歌偏好</p>
        </div>
      </div>
      <div class="fix-bottom">
        <span>设置</span>
        <span>退出登录/关闭</span>
      </div>
    </div>
    <new-plate v-if="tabShow==1" v-model='plate'></new-plate>
    <myMusic v-else-if="tabShow==0"></myMusic>
    <discover v-else></discover>

    <!-- <movieRank></movieRank> -->
  </div>
</template>

<script>
import newPlate from "./TopTab/newPlate.vue";
// import movieRank from "./movieRank.vue";
import myMusic from "./TopTab/myMusic.vue";
import discover from "./TopTab/discover.vue";

export default {
  components: {
    newPlate,
    myMusic,
    discover,
  },
  data() {
    return {
      show: false,
      tabShow:1,
      plate:'plate',
    };
  },

  methods: {
    setting() {
      this.show = true;
    },
    hide() {
      this.show = false;
    },
    tabChange(i){
        switch(i){
          case 0:this.tabShow=0;
          break;
           case 1:this.tabShow=1;
          break;
          default:
          this.tabShow=2;
        }
    }
  }
};
</script>

