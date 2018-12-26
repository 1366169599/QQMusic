<style lang="less" scoped>
.recommend-mv {
  font-size: 20px;
  padding: 10px 5px;
}
.MV-container {
  display: flex;
  flex-wrap: wrap;
  .MV-item {
    width: 50%;
    height: 180px;
    box-sizing: border-box;
    padding: 0 5px;
    text-decoration: none;
    .img-cont {
      width: 100%;
      height: 120px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      .playCount {
        position: absolute;
        top: 5px;
        right: 5px;
        display: flex;
        .num {
          display: inline-block;
          color: white;
          font-size: 14px;
          height: 20px;
          line-height: 20px;
        }
        .logo {
          display: inline-block;
          width: 20px;
          height: 20px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .text {
      .name {
        font-size: 14px;
        color: black;
      }
      .author {
        font-size: 12px;
        color: #d1d1d1;
        width: 150px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
<template>
  <div>
    <p class="recommend-mv">推荐MV</p>
    <div class="MV-container">
      <router-link class="MV-item" v-for="mv in mvs" :to="'mvdetail?id='+mv.id">

        <div class="img-cont">
          <img :src="mv.picUrl" alt>
          <p class="playCount">
            <span class="logo">
              <img src="../../assets/playcount.png" alt>
            </span>
            <span class="num">{{mv.playCount}}</span>
          </p>
        </div>
        <div class="text">
          <p class="name">{{mv.name}}</p>
          <p class="author">
            {{mv.artists.map(item=>{
              return item.name
            }).join('/')}}
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
      mvs: []
    };
  },
  created() {
    this.$axios({
      method: "get",
      url: "/personalized/mv"
    }).then(res => {
      this.mvs = res.data.result;
    });
  }
};
</script>
