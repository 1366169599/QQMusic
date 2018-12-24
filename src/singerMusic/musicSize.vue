<style lang="less" scoped>
.singer-musiclist {
  .song-name-bar {
    position: relative;
    border-bottom: 1px solid #d1d1d1;
    .song-demo {
      height: 50px;
      padding-left: 20px;
      box-sizing: border-box;
      margin-right: 50px;
      .song-name {
        padding: 3px 0;
      }
      .album-name {
        font-size: 12px;
        color: gray;
      }
    }
    .pop-menu {
      width: 50px;
      height: 50px;
      position: absolute;
      right: 0;
      top: 0;
      line-height: 50px;
      text-align: center;
      transform: rotate(90deg);
    }
  }
}
</style>
<template>
  <div>
    <div class="singer-musiclist">
      <div class="song-name-bar" v-for="song in hotSongs">
        <div class="song-demo" @click="playMusic(song,hotSongs)">
          <p class="song-name">{{song.name}}</p>
          <p class="album-name">{{name}}-{{song.al.name}}</p>
        </div>
        <p class="pop-menu" @click="showPopMenu(song)">···</p>
      </div>
    </div>
    <pop-menu :show='showPop' :song='song' @changePopState='changePopState'></pop-menu>
  </div>
</template>
<script>
import popMenu from "../songMenu.vue";
export default {
  data() {
    return {
      hotSongs: [],
      currentSong: "",
      name: "",
      playState: false,
      audioElement: null,
      showPop: false,
      song:{},
    };
  },
  methods: {
    showPopMenu(song) {
      this.showPop = true;
      this.song=song
    },
    changePopState(){
        this.showPop=false
    }
    // playMusic(song) {
    //   this.playState = !this.playState;
    //   // this.currentSong = song.mp3Url;
    //   this.audioElement.load();
    //   this.$axios({
    //     method: "get",
    //     url: "/music/url?id=" + song.id
    //   }).then(res => {
    //     //     console.log(res);
    //     this.audioElement.src = res.data.data[0].url;
    //     if (this.playState) {
    //       this.audioElement.play();
    //     } else {
    //       this.audioElement.pause();
    //     }
    //   });
    // }
  },
  created() {
    let queryParam = location.hash.split("?")[1];
    let obj = {};
    queryParam.split("&").forEach(param => {
      obj[param.split("=")[0]] = param.split("=")[1];
    });
    this.$axios({
      method: "get",
      url: "/artists?id=" + obj.id
    }).then(res => {
      this.hotSongs = res.data.hotSongs;
      this.name = res.data.artist.name;
    });
  },
  components: {
    popMenu
  }
};
</script>
