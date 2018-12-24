<style lang="less" scoped>
.ranking-list {
  .arrows {
    width: 60px;
    height: 60px;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
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
  .container {
    background: #d1d1d1;
    .rank-demo {
      display: flex;
      margin: 0 20px 20px 20px;
      box-sizing: border-box;
      background: white;
      color: black;
      text-decoration:none;
      .img-cont {
        width: 100px;
        height: 100px;
        position: relative;
        img {
          width: 100%;
          height: 100%;
        }
        .update{
            position: absolute;
            left: 5px;
            bottom: 5px;
            font-size: 12px;
            color: white;
        }
      }
    .top-three-song{
      p{
        font-size: 14px;
        line-height: 33px;
        padding-left: 10px;
        width: 250px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow:ellipsis;
      }
    }
    }
  }
}
</style>


<template>
  <div class="ranking-list">
      
    <div class="arrows" @click="goBack">
      <img src="../../assets/arrows.png" alt>
    </div>
    <div class="title">
      <h2>音乐巅峰榜</h2>
    </div>

    <div class="container">
      
      <router-link class="rank-demo" v-for="(rankingList,index) in rankingLists" 
      :to='"rankingList?idx="+index'>
        <div class="img-cont">
            <img :src="rankingList.coverImgUrl" alt="">
            <div class="update">{{rankingList.updateFrequency}}</div>
        </div>
        <div class="top-three-song">
          <p v-for="(item,index) in rankingList.tracks">
            {{(index+1)+'.'+item.first+'-'+item.second}}
          </p>
        </div>
          
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rankingLists: []
    };
  },
  created() {
    this.$axios({
      method: "get",
      url: "/toplist/detail"
    }).then(res => {
      this.rankingLists=res.data.list
    });
  }
};
</script>

