<style lang="less" scoped>
    .singer-information{
        height: 300px;
        position: relative;
        img{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 300px;
        }
        .artist{
            width: 210px;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: 180px;
            color: white;
            .name{
                font-size: 30px;
                text-align: center;
                margin: 10px 0;
            }
            .attention{
                span{
                    display: inline-block;
                    width: 100px;
                    height: 25px;
                    border: 1px solid green;
                    border-radius: 25px;
                    text-align: center;
                    padding: 2px 0;
                }
            }
        }
    }
    .singer-music{
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid gray;
        border-top: 1px solid gray;
        p{
            display: flex;
            span{
                display: inline-block;
                width: 25%;
                text-align: center;
            }
        }
    }
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
        <div class="singer-information">
            <img :src="backgrond" alt="">
            <div class="artist">
            <p class="name">{{name}}</p>
            <p class="attention">
                <span>关注</span>
                <span>勋章</span>
            </p>
            </div>
        </div>
        <div class="singer-music">
           <p>
               <span>歌曲{{musicSize}}</span>
               <span>专辑{{albumSize}}</span>
               <span>MV{{mvSize}}</span>
               <span>详情</span>
           </p>
        </div>
        <div class="singer-musiclist">
            <div class="single" v-for="song in hotSongs">
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
let axios = require("axios");
export default {
  data() {
    return {
      hotSongs: [],
      currentSong: "",
      playState: false,
      audioElement: null,
      name: "",
      backgrond:'',
      musicSize:'',
      albumSize:'',
      mvSize:''
    };
  },
  methods: {
    playMusic(song) {
      this.playState = !this.playState;
      // this.currentSong = song.mp3Url;
      this.audioElement.load();
      axios({
        method: "get",
        url: "http://101.236.45.250:4000/music/url?id=" + song.id
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
    axios({
      method: "get",
      url: "http://101.236.45.250:4000/artists?id=" + obj.id
    }).then(res => {
      console.log(res.data);
      this.hotSongs = res.data.hotSongs;
      this.name = res.data.artist.name;
      this.backgrond=res.data.artist.picUrl;
      this.musicSize=res.data.artist.musicSize;
      this.albumSize=res.data.artist.albumSize;
      this.mvSize=res.data.artist.mvSize;
    });
  },
  mounted() {
    this.audioElement = document.getElementById("myAudio");
  }
};
</script>
