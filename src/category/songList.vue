<style lang=less>
.songList {
  a {
    text-decoration: none;
    color: black;
  }

  .quality-cont {
    height: 240px;
    background: aqua;
    .nav-bar {
      height: 60px;
      display: flex;
      .back-arrow {
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 60%;
          height: 60%;
        }
      }
      .list-name{
        line-height: 60px;
        font-size: 20px;
        color: white;
      }
    }
    .quality {
      display: flex;
      padding: 20px 10px;
      .img {
        width: 100px;
        height: 100px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .text {
        flex: 1;
        padding-left: 10px;
        .title {
          display: inline-block;
          line-height: 35px;
        }
        .arrow {
          width: 10px;
          height: 10px;
          display: inline-block;
          border-top: 2px solid gray;
          border-right: 2px solid gray;
          transform: rotate(45deg) translate(0, -3px);
        }
        .qualityname {
          width: 250px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .signature {
          font-size: 12px;
          color: #333;
        }
      }
    }
  }
  .cate {
    display: flex;
    justify-content: space-between;
    padding: 10px 10px;
    .all-song {
      font-size: 18px;
      font-weight: 600;
      text-decoration: none;
    }
  }
  .all-song-list {
    display: flex;
    flex-wrap: wrap;
    .song-item {
      font-size: 14px;
      padding: 4px;
      box-sizing: border-box;
      width: 50%;
      .img-cont {
        width: 100%;
        height: 150px;
        position: relative;
        .singer-name {
          position: absolute;
          bottom: 0;
          left: 0;
          color: #fff;
        }
        img {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .empty {
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
<template>
  <div class="songList">

    <div class="quality-cont">
      <div class="nav-bar">
        <div class="back-arrow" @click="goBack">
          <img src="../../assets/arrowsWhite.png" alt>
        </div>
        <div class="list-name">歌单</div>
      </div> 
      <div class="quality">
        <div class="img">
          <img :src="coverImgUrl" alt>
        </div>
        <div class="text">
          <div>
            <h3 class="title">精品歌单</h3>
            <div class="arrow"></div>
          </div>
          <div class="qualityname">{{qualityname}}</div>
          <div class="signature">{{copywriter}}</div>
        </div>
      </div>
    </div>


    <div class="cate">
      <router-link class="all-song" to="catlist">{{songList}}</router-link>
      <div class="cate-list">
        <span class="huayu">华语</span>
        <span class="ele">电子</span>
        <span class="rock">摇滚</span>
      </div>
    </div>
    <div>
      <div class="all-song-list" v-if="songs.length">
        <router-link class="song-item" v-for="song in songs" :to="'songListCont?id='+song.id">
          <div class="img-cont">
            <img :src="song.coverImgUrl" alt>
            <div class="singer-name">{{song.creator.nickname}}</div>
          </div>
          <p class="name">{{song.name}}</p>
        </router-link>
      </div>
      <div class="empty" v-else>没有查到相关歌曲信息，抱歉</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      coverImgUrl: "",
      qualityname: "",
      copywriter: "",
      songs: [],
      songList: "全部歌单"
    };
  },
  created() {
    this.$axios({
      method: "get",
      url: "/top/playlist/highquality?limit=30"
    }).then(res => {
      this.coverImgUrl = res.data.playlists[0].coverImgUrl;
      this.qualityname = res.data.playlists[0].name;
      this.copywriter = res.data.playlists[0].copywriter;
    });
    let hash =
      location.hash.split("?").length > 1 ? location.hash.split("?")[1] : "";
    let arr = hash.split("&");
    let obj = {};
    arr.forEach(item => {
      obj[item.split("=")[0]] = item.split("=")[1];
    });
    this.songList = decodeURIComponent(obj.cat);
    if (this.songList === "undefined") {
      this.songList = "全部歌曲";
      obj.cat = "华语";
    }

    this.$axios({
      method: "get",
      url: "/top/playlist/highquality?limit=30&cat=" + obj.cat
    }).then(res => {
      this.songs = res.data.playlists;
    });
  }
};
</script>

