<style lang=less>
.top-bar {
  background: cyan;

  ul {
    list-style: none;
    display: flex;
  }
  li {
    line-height: 60px;
    font-size: 20px;
    padding: 5px;
  }
  a {
    text-decoration: none;
  }
}
.menu {
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  background: rgb(182, 243, 233);
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
      background: beige;
    .set {
      margin-top: 50px;
      p {
        margin: 10px;
      }
    }
  }

  .fix-bottom {
      display: flex;
      align-items: center;
      height: 10%;
    position: absolute;
    left: 0;
    bottom: 0;
  }
}
.mask {
    z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
}
</style>

<template>
    <div>
        <div class="top-bar">
            <ul>
                <li><img src="../assets/菜单.png" alt="" @click="setting"></li>
                <li>
                    <a href="">我的</a>
                </li>
                <li>
                    <a href="">音乐馆</a>
                </li>
                <li>
                    <a href="">发现</a>
                </li>
            </ul>
        </div>
        <div class="mask" v-if="show" @click="hide"></div>
        <div class="menu" :class='{"out":!show,"in": show}'>
            <div class="set-container">
                <div class="set">
                    <div class="">
                        <p>个性装扮
                            <p>默认套装</p>
                        </p>
                    </div>
                    <p>消息中心</p>
                    <div class="">
                        <p>免流量服务</p>
                        <p>王卡听歌免流量</p>
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
        <new-plate></new-plate>
        <!-- <movieRank></movieRank> -->
    </div>
</template>

<script>
import newPlate from "./newPlate.vue";
import movieRank from "./movieRank.vue";
export default {
  components: {
    newPlate,
    movieRank
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    setting() {
      this.show = true;
    },
    hide() {
      this.show = false;
    }
  }
};
</script>

