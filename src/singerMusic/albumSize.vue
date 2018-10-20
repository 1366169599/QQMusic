<style lang="less" scoped>
a{
  text-decoration: none;
  color: black;
}
.album-item {
  display: flex;
  height: 50px;
  padding-bottom: 5px;
  .img-cont {
    width: 50px;
    height: 50px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .text {
    flex-grow: 1;
    height: 50px;
    box-sizing: border-box;
    border-bottom: 1px solid #d1d1d1;
    line-height: 50px;
    padding-left: 15px;
  }
}
</style>

<template>
    <div>
      <div>
        <router-link class="album-item" v-for="album in hotAlbums"
        :to='"/albumCont?id="+album.id'>
            <div class="img-cont">
                <img :src="album.picUrl" alt="">
            </div>
            <div class="text">
                <p class="title">{{album.name}}</p>
            </div>
        </router-link> 
        </div>
    </div>
</template>
<script>

export default {
  props: ["singerId"],
  data() {
    return {
      hotAlbums: []
    };
  },
  created() {
    let hash = location.hash;
    this.$axios({
      method: "get",
      url: "/artist/album?id=" + this.singerId
    }).then(res => {
      this.hotAlbums = res.data.hotAlbums;
    });
  }
};
</script>

