<style lang="less" scoped>
video::-webkit-media-controls-play-button {display:none}
.video-cont {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  video {
    width: 100%;
    height: 100%;
  }
  .play-button{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      display: none;
      .but{
          img{
              width: 50px;
              height: 50px;
          }
      }
  }
  .show-but{
      display: block;
  }
}
.container {
  // margin-top: 30vh;
  .title {
    padding: 0 10px;
    .name {
      font-size: 20px;
    }
    .time {
      font-size: 14px;
      color: gray;
      line-height: 25px;
    }
  }
  .nav-bar {
    display: flex;
    justify-content: space-around;
    padding: 10px 0;
    .img-cont {
      img {
        height: 30px;
        width: 30px;
      }
    }
    .num {
      text-align: center;
      font-size: 14px;
      color: gray;
    }
  }
  .recommend {
    padding-left: 5px;
    background: #d1d1d1;
    line-height: 25px;
    color: gray;
    font-size: 14px;
  }
  
}
</style>

<template>
  <div>
    <div class="video-cont" id="videoCont">
      <video @loadeddata="calcHeight" :src="data.brs[240]" autoplay ref="myVideo" controls @click="showButton"></video>
      <div class="play-button" :class="{'show-but':showPlayButton}" ref="button">
          <div class="but" v-if="play" @click="playVid()"><img src="../../assets/play.png" alt=""></div>
          <div class="but" v-else @click="pauseVid()"><img src="../../assets/stop.png" alt=""></div>
      </div>
    </div>

    <div class="container" :style="{'margin-top':height+'px'}">
      <div class="title">
        <div class="name">{{data.name}}</div>
        <div
          class="time"
        >发布:{{data.publishTime}}&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp播放:{{data.playCount}}</div>
      </div>
      <div class="nav-bar">
        <div class="img-cont">
          <img src="../../assets/likeblack.png" alt>
          <div class="num">{{data.likeCount}}</div>
        </div>
        <div class="img-cont">
          <img src="../../assets/collect.png" alt>
          <div class="num">{{data.subCount}}</div>
        </div>
        <div class="img-cont">
          <img src="../../assets/commentblack.png" alt>
          <div class="num">{{data.commentCount}}</div>
        </div>
        <div class="img-cont">
          <img src="../../assets/shareblack.png" alt>
          <div class="num">{{data.shareCount}}</div>
        </div>
      </div>
      <div class="recommend">相关推荐</div>
      <mvComment :url="url"></mvComment>
    </div>
  </div>
</template>
<script>
import lodash from 'lodash'
console.log(lodash.debounce)
import mvComment from "../component/comment.vue";
export default {
  data() {
    return {
      data: {
        brs: {}
      },
      height: "",
      url: "/comment/mv?id=",
      play:false,
      showPlayButton:false,
    };
  },
  created() {
    let has = location.hash.split("?")[1];
    let obj = {};
    has.split("&").forEach(item => {
      obj[item.split("=")[0]] = item.split("=")[1];
    });
    console.log(obj.id);
    this.$axios({
      method: "get",
      url: "/mv/detail?mvid=" + obj.id
    }).then(res => {
      this.data = res.data.data;
    });
  },
  methods: {
    calcHeight() {
      this.height = document.getElementById("videoCont").offsetHeight;
    },
    playVid() {
      this.$refs.myVideo.play();
      this.play=!this.play
        this.threeHide();
    // setTimeout(this.hiddenButton,3000)
    },
    pauseVid() {
      this.$refs.myVideo.pause();
      this.play=!this.play
    },

    threeHide: lodash.debounce(function() {
        if(this.play){
        this.showPlayButton =true;
        }else{
        this.showPlayButton =false;
        }
    }, 3000),
    showButton(){
        this.showPlayButton=!this.showPlayButton
        this.threeHide();

    },
    hiddenButton(){
        this.showPlayButton=false
    }
  },
//   watch:{
//       showPlayButton:function(){

//       }
//   },
  //   mounted() {
  //       this.height = document.getElementById('videoCont').offsetHeight;
  //       console.log(this.height)

  //   },
  components: {
    mvComment
  }
};
</script>
