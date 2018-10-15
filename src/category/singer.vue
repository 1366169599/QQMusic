<style lang="less" scoped>
.singer{
.top-bar {
  height: 50px;
  display: flex;
  justify-content: space-between;
}
.singer-list {
  .singer {
    height: 50px;
    display: flex;
    margin: 5px;
    .singer-img {
      height: 50px;
      width: 50px;
      border-radius: 25px;
      overflow: hidden;
      img {
        height: 100%;
        width: 100%;
      }
    }
    p {
      line-height: 50px;
      padding-left: 30px;
      border-bottom: 1px solid #d1d1d1;
      flex-grow: 1;
    }
  }
}
}
</style>
<template>
    <div class='singer'>
        <div class="top-bar">
            <div>
                <-</div>
                    <div>
                        <span>歌手</span>
                        <span>我的</span>
                    </div>
                    <div><img src="../../assets/search.png" alt=""></div>
            </div>
            <div class="singer-list">
                <router-link v-for="singer in singerList" class="singer" 
                    :to=' "/singerMusic?id=" + singer.id'>
                    <div class="singer-img">
                        <img :src="singer.img1v1Url" alt="">
                    </div>
                    <p>{{singer.name}}</p>
                </router-link>
            </div>
        </div>
</template>
<script>
let axios = require("axios");
export default {
  data() {
    return {
      singerList: []
    };
  },
  created() {
    axios({
      method: "get",
      url: "http://101.236.45.250:4000/artist/list"
    }).then(res => {
      console.log(res.data.artists[0].id);
      this.singerList = res.data.artists;
    });
  }
};
</script>

