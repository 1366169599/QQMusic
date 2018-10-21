<style lang="less" scoped>
.album-cont {
  height: 240px;
  background: rgb(82, 82, 235);
  color: white;
  .arrows{
      width: 60px;
      height: 60px;
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
          width: 70%;
          height: 70%;
      }
  }
  .title {
    line-height: 60px;
    text-align: center;
  }
  .album {
    height: 120px;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    .img-cont {
      width: 120px;
      height: 120px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .text {
      height: 120px;
      width: 200px;
      .songListName {
        font-size: 20px;
      }
      .singer {
        display: flex;
        .creatorImg {
          width: 30px;
          height: 30px;
          border-radius: 15px;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .creator {
          line-height: 30px;
        }
      }
      .description {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 12px;
        padding-top: 20px;
      }
    }
  }
}
.songs-item {
  display: flex;
  .num {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .text {
    box-sizing: border-box;
    border-bottom: 1px solid #d1d1d1;
    flex-grow: 1;
    .name {
      padding: 3px 0;
    }
    .creator {
      font-size: 12px;
      color: gray;
    }
  }
}
</style>

<template>
    <div>
        <div class="album-cont">
            <div class="arrows" @click="goBack">
                <img src="../../assets/arrowsWhite.png" alt="">
            </div>
            <h2 class="title">歌单</h2>
            <div class="album">
                <div class="img-cont">
                    <img :src="songListImg" alt="">
                </div>
                <div class="text">
                    <p class="songListName">{{songListName}}</p>
                    <p class="singer">
                        <span class="creatorImg"><img :src="creatorImg" alt=""></span>
                        <span class="creator">{{creator}}</span>
                    </p>
                    <p class="description">简介:{{description}}</p>
                </div>
            </div>
        </div>
        <div class="songs">
            <div class="songs-item" v-for="(song,index) in songs" @click="playMusic(song)">
                <div class="num">{{index+1}}</div>
                <div class="text">
                    <p class="name">{{song.name}}</p>
                    <p class="author">{{multiSinger(song)}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
  data() {
    return {
      songListImg: "",
      songListName: "",
      creatorImg: "",
      creator: "",
      description: "",
      songListId: "",
      songs: [],
      authors: []
    };
  },
  methods: {
    multiSinger(song) {
      return song.ar.map(item => {
          return item.name;
        })
        .join("/");
    }   
  },
  created() {
    let queryParam = location.hash.split("?")[1];
    let obj = {};
    queryParam.split("&").forEach(param => {
      obj[param.split("=")[0]] = param.split("=")[1];
    });
    this.songListId = obj.id;
    this.$axios({
      method: "get",
      url: "/playlist/detail?id=" + obj.id
    }).then(res => {
      this.songListImg = res.data.playlist.coverImgUrl;
      this.songListName = res.data.playlist.name;
      this.creator = res.data.playlist.creator.nickname;
      this.creatorImg = res.data.playlist.creator.avatarUrl;
      this.description = res.data.playlist.description;
      this.songs = res.data.playlist.tracks;
    });
  }
};
</script>


