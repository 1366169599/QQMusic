<style lang="less" scoped>
.container {
  background: gray;
  height: 100vh;
  position: relative;
  overflow: hidden;
  .title-bar {
    display: flex;
    height: 10%;
    box-shadow: 0 1px black;
    .img-cont {
      height: 80px;
      width: 80px;
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
        line-height: 40px;
        font-size: 20px;
        margin-top: 5px;
      }
      .author {
        font-size: 16px;
        color: #d1d1d1;
      }
    }
  }

  .play-button {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    // background: darksalmon;
    display: flex;
    justify-content: space-between;
    height: 15%;
    .comment-button {
      width: 60px;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 45px;
        height: 45px;
      }
    }
    .button-cont {
      height: 100px;
      display: flex;
      flex-grow: 1;
      justify-content: space-around;
      align-items: center;
      position: relative;
      span {
        display: inline-block;
        img {
          width: 50px;
          height: 50px;
        }
      }
      .on-off-cont {
        width: 50px;
        height: 50px;
        position: relative;
        .on-off {
          position: absolute;
          top: 0;
          left: 0;
        }
      }
    }
  }
  .panel {
    height: 75%;
  }
  .menu-mask{
     position: absolute;
     left: 0;
     right: 0;
     top: 0;
     bottom: 0;
  }
  .menu-bar{
      background: #ffffff;
      height: 50%;
      overflow: auto;
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      border-radius: 10px 10px 0 0;
      transform: translate(0,100%);
    p{
        padding-left: 15px;
        line-height: 50px;
        border-bottom: 1px solid #d1d1d1
    }
  }
  .active{
      transform: translate(0,0);
  }
}
</style>

<template>
    <div>
        <div class="container">

            <div class="title-bar">
                <div class="img-cont" @click="returnLast">
                    <img src="../assets/arrowsWhite.png" alt="">
                </div>
                <div class="name">
                    <p class="song-name">{{$store.state.songName}}</p>
                    <p class="author">{{$store.state.singerName}}</p>
                </div>
                <div class="img-cont">
                    <img src="../assets/share.png" alt="">
                </div>
            </div>

            <div class="panel" @click="tabWeb">
                <backgroundImg v-if="show"></backgroundImg>
                <lyricWeb v-else></lyricWeb>
            </div>

            <div class="play-button">
                <div class="comment-button">
                    <img src="../assets/comment.png" alt="">
                </div>

                <div class="button-cont">
                    <span @click="lastSong"><img src="../assets/last.png" alt=""></span>
                    <div class="on-off-cont">
                        <span class="on-off" v-if="!$store.state.playState" @click="musicSwitch"><img src="../assets/playWhite.png" alt=""></span>
                        <span class="on-off" v-else @click="musicSwitch"><img src="../assets/stopWhite.png" alt=""></span>
                    </div>
                    <span @click="nextSong"><img src="../assets/next.png" alt=""></span>
                </div>

                <div class="comment-button" @click="showMenuBar">
                    <img src="../assets/menuWhite.png" alt="">
                </div>
            </div>

            <div class="menu-mask" v-if="slip" @click="hiddeMenu"></div>
            <div :class='["menu-bar",{"active":slip}]'>
                <p v-for="song in $store.state.songs" @click="playMenuMusic(song,$store.state.songs)">
                    {{song.name}}-{{getSinger(song)}}
                </p>
            </div>
            
        </div>
    </div>
</template>
<script>
import backgroundImg from "./detail/backgroundImg.vue";
import lyricWeb from "./detail/lyricWeb.vue";

export default {
  data() {
    return {
      show: true,
      slip:false,
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
      return song.ar.map(item => {
          return item.name;
        }).join("/");
    },
    showMenuBar(){
        this.slip=true;
    },
    hiddeMenu(){
        this.slip=false;
    },
    playMenuMusic(song,songs){
        this.playMusic(song,songs)
        this.$store.commit('setShowPlayBar',false)
    },
    lastSong(){
        let song=this.$store.state.song
        let songs=this.$store.state.songs
        let index= songs.indexOf(song)
        if(index > 0 ) {
            this.playMusic(songs[index-1], songs)
        }else{
            let len=songs.length
            this.playMusic(songs[len-1], songs)
        } 
        this.$store.commit('setShowPlayBar',false)
        },
         nextSong(){
        let song=this.$store.state.song
        let songs=this.$store.state.songs
        let index= songs.indexOf(song)
        let len=songs.length
        if(index == len-1 ) {
            this.playMusic(songs[0], songs)
        }else{
            this.playMusic(songs[index+1], songs)
        } 
        this.$store.commit('setShowPlayBar',false)
        },
    
  },
  components: {
    backgroundImg,
    lyricWeb
  }
};
</script>

