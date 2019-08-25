<style lang="less" scoped>
.searchBar {
  background: cyan;
  display: flex;
  justify-content: space-between;
  height: 60px;
  .img-cont {
    display: inline-block;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 70%;
      height: 70%;
    }
  }
  .search {
    flex-grow: 1;
    height: 60px;
    input {
      display: inline-block;
      width: 100%;
      height: 100%;
      background: cyan;
      outline: none;
      border: none;
      color: black;
      font-size: 16px;
      &::-webkit-input-placeholder {
          color: rgba(200,200,200 ,0.8);
      }
    }
  }
}
.hot-search {
  margin: 20px;
  p {
    padding-bottom: 10px;
    span {
      height: 20px;
      display: inline-block;
      line-height: 20px;
      border: 1px solid #d1d1d1;
      color: #999;
      border-radius: 10px;
      padding: 0 8px;
      margin: 5px;
    }
  }
}
.recommend{
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 60px;
    background: #ffffff;
    padding-left: 20px;
    .title{
        line-height: 50px;
    }
    .artist{
        display: flex;
        .img-cont{
            width: 50px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: 60%;
                height: 60%;
            }
        }
        .name{
            line-height: 50px;
            flex-grow: 1;
            font-size: 16px;
            border-bottom: 1px solid #d1d1d1;
        }
    }
}
</style>

<template>
    <div>
        <div class="searchBar">
            <span class="img-cont" @click="goBack">
                <img src="../../assets/arrowsWhite.png" alt="">
            </span>
            <span class="search">
                <input type="text" v-model='searchValue' placeholder="搜索音乐、视频、歌单、歌手" @input="search()">
            </span>
            <span class="img-cont">
                <img src="../../assets/microphone.png" alt="">
            </span>
        </div>
        <div class="hot-search">
            <p>热门搜索</p>
            <p>
                <span v-for="search in hotSearch">{{search.first}}</span>
            </p>
        </div>
        <div class="recommend" v-if="showArtist">
            <p class="title">搜索“{{searchValue}}”</p>
            <p class="artist" v-for="artist in artists">
                <span class="img-cont">
                    <img src="../../assets/searchblack.png" alt="">
                </span>
                <span class="name">{{artist.name}}</span>
            </p>
        </div>
    </div>
</template>
<script>

export default {
  data() {
    return {
      hotSearch: [],
      artists: [],
      showArtist:false,
      searchValue:''
    };
  },
  methods: {
    search() {
      if (this.searchValue) {
          this.showArtist=true
        this.$axios({
          method: "get",
          url:
            "/search/suggest?type=100&keywords=" +
            this.searchValue
        }).then(res => {
          this.artists = res.data.result.artists;
        //   if(this.artists && this.artists.length==1){
        //       this.$router.push({
        //           path:'singerMusic?id='+this.artists[0].id,
        //       })
        //   }
        });
      }else{
          this.showArtist=false
      };

    },
    goBack() {
      history.back();
    }
  },
  created() {
    this.$axios({
      method: "get",
      url: "/search/hot"
    }).then(res => {
      this.hotSearch = res.data.result.hots;
    });
  }
};
</script>

