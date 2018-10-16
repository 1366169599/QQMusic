<style lang=less scoped>
.music-room{
.top-bar {
  background: cyan;
  width: 100%;
  ul {
    list-style: none;
    display: flex;
  }
  .top-bar-container {
    justify-content: space-between;
    align-items: center;
    .tab {
      font-size: 20px;
      .show{
        color: aliceblue;
      }
      li {
        padding: 5px;
      }
    }
    .add {
      font-size: 35px;
    }
    li {
      img {
        width: 28px;
        height: 28px;
        vertical-align: middle;
      }
    }
  }
}
.search {
  input {
    display: block;
    width: 100%;
    height: 30px;
    text-align: center;
    background: aquamarine;
    border: none;
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
      <ul class="top-bar-container">
        <li><img src="../assets/菜单.png" alt="" @click="setting"></li>
        <li>
          <ul class="tab">
            <li @click="tabChange(0)" :class="{'show':tabShow==0}">我的</li>
            <li @click="tabChange(1)" :class="{'show':tabShow==1}">音乐馆</li>
            <li @click="tabChange(2)" :class="{'show':tabShow==2}">发现</li>
          </ul>
        </li>
      <li class="add">+</li>
      </ul>

    </div>
    <div class="search">
      <input type="text" placeholder="搜索">
    </div>
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
      plate:'plate'
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

