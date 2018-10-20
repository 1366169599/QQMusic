<style lang="less" scoped>
    .singer-musiclist{
        .song-demo{
            height: 50px;
            border-bottom: 1px solid #d1d1d1;
            padding-left: 20px;
            .song-name{
                padding: 3px 0;
            }
            .album-name{
                font-size: 12px;
                color:gray;
            }
        }
    }
</style>
<template>
    <div>
        <div class="singer-musiclist">
            <div v-for="song in hotSongs">
                <div class="song-demo" @click="playMusic(song)">
                    <p class="song-name">{{song.name}}</p>
                    <p class="album-name">{{name}}-{{song.al.name}}</p>
                </div>
            </div>
        </div>
        <audio src="" id='myAudio' type="audio/mpeg"></audio>
    </div>
</template>
<script>

export default {
  data() {
    return {
      hotSongs: [],
      currentSong: "",
      name:'',
      playState: false,
      audioElement: null,
    };
  },
  methods: {
    playMusic(song) {
      this.playState = !this.playState;
      // this.currentSong = song.mp3Url;
      this.audioElement.load();
      this.$axios({
        method: "get",
        url: "/music/url?id=" + song.id
      }).then(res => {
        //     console.log(res);
        this.audioElement.src = res.data.data[0].url;
        if (this.playState) {
          this.audioElement.play();
        } else {
          this.audioElement.pause();
        }
        //     // console.log(this.currentSong);
        //     //下一个队列的时候才执行，此时dom已经生成了
        //     // this.$nextTick(() => {
        //         setTimeout(()=>{
        //         this.$refs.currentSong.play();

        //         },10)

        //       if (this.playState) {
        //         // this.$refs.currentSong.play();

        //     //     this.$refs.currentSong.load();
        //     //     this.$refs.currentSong.play();
        //     //   } else {
        //     //     this.$refs.currentSong.pause();
        //       }
        // });
      });
    }
  },
  created() {
    let queryParam = location.hash.split("?")[1];
    let obj = {};
    queryParam.split("&").forEach(param => {
      obj[param.split("=")[0]] = param.split("=")[1];
    });
    console.log(obj.id);
    this.$axios({
      method: "get",
      url: "/artists?id=" + obj.id
    }).then(res => {
      console.log(res.data);
      this.hotSongs = res.data.hotSongs;
      this.name = res.data.artist.name;      
    });
  },
  mounted() {
    this.audioElement = document.getElementById("myAudio");
  }
};
</script>
