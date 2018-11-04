<style lang="less" scoped>
.album-cont {
  height: 240px;
  background: rgb(82, 82, 235);
  color: white;
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
      .albumName {
        font-size: 20px;
      }
      .singer {
        display: flex;
        .singerImg {
          width: 30px;
          height: 30px;
          border-radius: 15px;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .singerName {
          line-height: 30px;
        }
      }
      .description {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 12px;
        padding-top: 30px;
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
    .name{
        padding: 3px 0;
    }
    .author {
      font-size: 12px;
      color: gray;
    }
  }
}
</style>

<template>
    <div>
        <div class="album-cont">
            <h2 class="title">专辑</h2>
            <div class="album">
                <div class="img-cont">
                    <img :src="albumImg" alt="">
                </div>
                <div class="text">
                    <p class="albumName">{{albumname}}</p>
                    <p class="singer">
                        <span class="singerImg"><img :src="singerImg" alt=""></span>
                        <span class="singerName">{{singerName}}</span>
                    </p>
                    <p class="description">简介:{{description}}</p>
                </div>
            </div>
            <!-- <div class="information">
                <span>{{}}</span>
                <span>{{}}</span>
                <span>{{}}</span>
            </div> -->
        </div>
        <div class="songs">
            <div class="songs-item" v-for="(song,index) in songs" @click="playMusic(song,songs)">
                <div class="num">{{index+1}}</div>
                <div class="text">
                    <p class="name">{{song.name}}</p>
                    <p class="author">{{singerName}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
  data() {
    return {
      albumImg: "",
      albumname: "",
      singerName: "",
      albumId: "",
      description: "",
      singerImg: "",
      songs: []
    };
  },
  created() {
    let queryParam = location.hash.split("?")[1];
    let obj = {};
    queryParam.split("&").forEach(param => {
      obj[param.split("=")[0]] = param.split("=")[1];
    });
    this.albumId = obj.id;
    this.$axios({
      method: "get",
      url: "/album?id=" + obj.id
    }).then(res => {
      console.log(res.data);
      this.albumImg = res.data.album.picUrl;
      this.albumname = res.data.album.name;
      this.singerName = res.data.album.artist.name;
      this.singerImg = res.data.album.artist.picUrl;
      this.description = res.data.album.description;
      this.songs = res.data.songs;
    });
  }
};
</script>

