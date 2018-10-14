<template>
    <div>
        <div class="singer-musiclist">
            <div class="single" v-for="(song,index) in hotSongs">
                <div>
                    <p @click="playMusic(song,index)">{{song.name}}</p>
                    <!-- <audio :src="song.mp3Url" ref='currentSong' type="audio/mpeg"></audio> -->

                </div>
            </div>
        </div>
        <audio src="" id='myAudio' type="audio/mpeg"></audio>
    </div>
</template>
<script>
let axios = require("axios");
export default {
  data() {
    return {
      hotSongs: [],
      currentSong:"",
      playState: false,
      audioElement:null
    };
  },
  methods: {
    playMusic(song,index) {
      this.playState = !song.playState;
        // this.currentSong = song.mp3Url;

        

      axios({
        method: "get",
        url: "http://101.236.45.250:4000/music/url?id=" + song.id
      }).then(res => {
    //     console.log(res);
        this.audioElement.src  = res.data.data[0].url;
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
    axios({
      method: "get",
      url: "http://101.236.45.250:4000/artists?id=" + obj.id
    }).then(res => {
      console.log(res.data);
      this.hotSongs = res.data.hotSongs;
      return this.hotSongs
    }).then(songs => {
        songs = songs.slice(0,2);
        songs.forEach(song => {
            axios({
                method: "get",
                url: "http://101.236.45.250:4000/music/url?id=" + song.id
            }).then(res => {
                // song.mp3Url = res.data.data[0].url;
                // this.$set(song,'mp3Url',res.data.data[0].url)
                // console.log(song.mp3Url)
            }
            )
        })
        // console.log(songs)
    })
  },
  mounted() {
      this.audioElement = document.getElementById('myAudio')
  }
};
</script>
