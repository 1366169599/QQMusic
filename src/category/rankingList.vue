<style lang="less" scoped>
.ranking-list {
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
    height: 60px;
    line-height: 60px;
    text-align: center;
    background: #d1d1d1;
  }
  .container{
      background: #d1d1d1;
  .rang-demo {
      display: flex;
      margin:0 20px 20px 20px;
      box-sizing: border-box;
      background: white;
      .top-three-song{
          flex-grow: 1;
          p{
              padding: 5px 20px;
          }
          .second{
              display: inline-block;
              display: flex;
              justify-content: space-between;
          }
      }
    .rank-img {
      width: 100px;
      height: 100px;
      position: relative;
      .title{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          z-index: 10;
          background: none;
          width: 100px;
      }
      img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }}
}
</style>


<template>
    <div class="ranking-list">
       <div class="arrows" @click="goBack">
                <img src="../../assets/arrows.png" alt="">
            </div>
        <div class="title">
            <h2>音乐巅峰榜</h2>
        </div>
        <div class="container">
        <div class="rang-demo" v-for="rank in category">
            <div class="rank-img">
                <div class="title">{{rank.data ? rank.data.playlist.creator.nickname:''}}</div>
                <img :src="rank.data? rank.data.playlist.creator.avatarUrl:''" alt="">
            </div>
            <div class="top-three-song">
                <p>1{{rank.data ? rank.data.playlist.tracks[0].name:''}}</p>
                <p class="second"><span>{{rank.data ? rank.data.playlist.tracks[1].name:''}}</span>
                <span>></span></p>
                <p>3{{rank.data ? rank.data.playlist.tracks[2].name:''}}</p>
            </div>
        </div>
        </div>
    </div>
</template>
<script>

export default {
  data() {
    return {
      category: [{}, {}, {}, {}, {}]
    };
  },
  created() {
    this.category.forEach((item, index) => {
      this.$axios({
        method: "get",
        url: "/top/list?idx=" + index
      }).then(res => {
        this.$set(item, "data", res.data);
      });
    });
  }
};
</script>

