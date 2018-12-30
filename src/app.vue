<style lang="less" scoped>
.play-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  height: 60px;
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 0 -1px rgb(194, 186, 186);
  .singer-img {
    height: 60px;
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    .img-border {
      width: 45px;
      height: 45px;
      border-radius: 30px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .text {
    flex-grow: 1;
    p {
      line-height: 30px;
    }
  }
  .log-cont {
    width: 120px;
    display: flex;
    justify-content: space-between;
    .on-off {
      position: relative;
      span {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60px;
        width: 60px;
        position: absolute;
        top: 0;
        left: 0;
        img {
          width: 60%;
          height: 60%;
        }
      }
    }
    .menu-img {
      width: 60px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 50%;
        height: 50%;
      }
    }
  }
}
</style>

<template>
    <div>
        <router-view></router-view>
        <audio id='myAudio' type="audio/mpeg" @ended="nextSongs"></audio>
        <div class="play-bar" v-show="$store.state.showPlayBar">           
            <!-- <router-link class="singer-img" to='detail' > -->
                <div class='singer-img'>
                    <div class=" img-border" @click="hiddenBar">
                        <img :src="$store.state.songPicture" alt="">
                    </div>
                </div>
            <!-- </router-link> -->

            <div class="text">
                <p>{{$store.state.songName}}</p>
                <p>{{$store.state.singerName}}</p>
            </div>
        

            <div class="log-cont">
                <div class="on-off">
                    <span v-if="!$store.state.playState" @click="switchMusic">
                        <img src="../assets/playGreen.png" alt="">
                    </span>
                    <span v-else @click="switchMusic">
                        <img src="../assets/stopGreen.png" alt="">
                    </span>
                </div>
                <div class="menu-img">
                    <img src="../assets/menuGreen.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      play: false
    };
  },
  mounted() {
    this.$store.commit("setAudioElement", document.getElementById("myAudio"));
  },
  methods: {
    switchMusic() {
      if (this.$store.state.playState) {
        this.$store.state.audioElement.pause();
      } else {
        this.$store.state.audioElement.play();
      }
      this.$store.commit("setPlayState", !this.$store.state.playState);
    },
     hiddenBar(){
            this.$store.commit('setShowPlayBar',false);       
            this.$router.push({path:'detail'})
    },
    nextSongs(){
      let song = this.$store.state.song;
      let songs = this.$store.state.songs;
      let index = songs.indexOf(song);
      let len = songs.length;
      if (index == len - 1) {
        this.playMusic(songs[0], songs);
      } else {
        this.playMusic(songs[index + 1], songs);
      }
      this.$store.commit("setShowPlayBar", false);
    }
  },
   
};
</script>


