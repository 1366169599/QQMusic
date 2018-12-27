<style lang="less" scoped>
.container {
  // background: gray;
  height: 100vh;
  position: relative;
  overflow: hidden;
  .title-bar {
    display: flex;
    height: 10vh;
    box-shadow: 0 1px black;
    .img-cont {
      height: 10vh;
      width: 10vh;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 60%;
        height: 60%;
      }
    }
    .name {
      flex-grow: 1;
      .song-name {
        color: #ffffff;
        line-height: 5vh;
        font-size: 20px;
        margin-top: 5px;
      }
      .author {
        font-size: 14px;
        color: #d1d1d1;
      }
    }
  }
  .prograss {
    height: 5vh;
    // background: aqua;
  }
  .play-button {
    position: fixed;
    left: 0;
    bottom: 5vh;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    .comment-button {
      width: 20vw;
      height: 10vh;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 40px;
        height: 40px;
      }
    }
    .button-cont {
      height: 10vh;
      width: 60vw;
      display: flex;
      justify-content: space-around;
      align-items: center;
      position: relative;
      .last,
      .next {
        height: 10vh;
        width: 20vw;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 40px;
          height: 40px;
        }
      }
      .on-off-cont {
        width: 10vh;
        height: 20vw;
        position: relative;
        .on-off {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 50px;
            height: 50px;
          }
        }
      }
    }
  }

  .panel {
    // height: 70vh;
  }
  .menu-mask {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .menu-bar {
    background: #ffffff;
    height: 50%;
    overflow: auto;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 10px 10px 0 0;
    transform: translate(0, 100%);
    p {
      padding-left: 15px;
      line-height: 50px;
      border-bottom: 1px solid #d1d1d1;
    }
  }
  .active {
    transform: translate(0, 0);
  }
}
</style>

<template>
  <div>
    <div class="container">
      <div class="title-bar">
        <div class="img-cont" @click="returnLast">
          <img src="../assets/arrowsWhite.png" alt>
        </div>
        <div class="name">
          <p class="song-name">{{$store.state.songName}}</p>
          <p class="author">{{$store.state.singerName}}</p>
        </div>
        <div class="img-cont">
          <img src="../assets/share.png" alt>
        </div>
      </div>

      <div class="panel" @click="tabWeb">
        <backgroundImg v-if="show"></backgroundImg>
        <lyricWeb v-else></lyricWeb>
      </div>
      <div class="prograss"></div>
      <div class="play-button">
        <router-link class="comment-button" :to="'comment?id='+$store.state.song.id">
          <img src="../assets/comment.png" alt>
        </router-link>

        <div class="button-cont">
          <div class="last" @click="lastSong">
            <img src="../assets/last.png" alt>
          </div>
          <div class="on-off-cont">
            <div class="on-off" v-if="!$store.state.playState" @click="musicSwitch">
              <img src="../assets/playWhite.png" alt>
            </div>
            <div class="on-off" v-else @click="musicSwitch">
              <img src="../assets/stopWhite.png" alt>
            </div>
          </div>
          <div class="next" @click="nextSong">
            <img src="../assets/next.png" alt>
          </div>
        </div>

        <div class="comment-button" @click="showMenuBar">
          <img src="../assets/menuWhite.png" alt>
        </div>
      </div>

      <div class="menu-mask" v-if="slip" @click="hiddeMenu"></div>
      <div :class="['menu-bar',{'active':slip}]">
        <p
          v-for="song in $store.state.songs"
          @click="playMenuMusic(song,$store.state.songs)"
        >{{song.name}}-{{getSinger(song)}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import backgroundImg from "./detail/backgroundImg.vue";
import lyricWeb from "./detail/lyricWeb.vue";
import "./util/rgbaster.js";
export default {
  data() {
    return {
      show: true,
      slip: false
    };
  },
  methods: {
    musicSwitch() {
      if (this.$store.state.playState) {
        this.$store.state.audioElement.pause();
      } else {
        this.$store.state.audioElement.play();
      }
      this.$store.commit("setPlayState", !this.$store.state.playState);
    },
    returnLast() {
      this.goBack();
      this.$store.state.showPlayBar = true;
    },
    tabWeb() {
      this.show = !this.show;
    },
    getSinger(song) {
      return song.ar
        .map(item => {
          return item.name;
        })
        .join("/");
    },
    showMenuBar() {
      this.slip = true;
    },
    hiddeMenu() {
      this.slip = false;
    },
    playMenuMusic(song, songs) {
      this.playMusic(song, songs);
      this.$store.commit("setShowPlayBar", false);
    },
    lastSong() {
      let song = this.$store.state.song;
      let songs = this.$store.state.songs;
      let index = songs.indexOf(song);
      if (index > 0) {
        this.playMusic(songs[index - 1], songs);
      } else {
        let len = songs.length;
        this.playMusic(songs[len - 1], songs);
      }
      this.$store.commit("setShowPlayBar", false);
    this.changeBg()
    },
    nextSong() {
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

    this.changeBg()
    },

    changeBg() {
      this.$nextTick(() => {
        RGBaster.colors(this.$store.state.song.al.picUrl, {
          exclude: ["rgb(255,255,255)", "rgb(0,0,0)"],
          success: function(payload) {
            // console.log(payload.dominant);
            // console.log(payload.secondary);
            // console.log(payload.palette);
            // console.log(payload);
            document.getElementsByClassName(
              "container"
            )[0].style = `background:linear-gradient(45deg, ${
              payload.dominant
            }, ${payload.secondary})`;
          }
        });
      });
    }
  },
  mounted() {
    this.changeBg()
  },
  components: {
    backgroundImg,
    lyricWeb
  }
};
</script>

