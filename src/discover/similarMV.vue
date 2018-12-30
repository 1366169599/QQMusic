<style lang="less" scoped>
.container {
  .title {
    padding-left: 5px;
    background: #d1d1d1;
    line-height: 25px;
    color: gray;
    font-size: 14px;
  }
  .mv-item {
    margin: 5px;
    display: flex;
    color: black;
    text-decoration: none;
    .img-cont {
      height: 70px;
      width: 140px;
      position: relative;
      img {
        height: 100%;
        width: 100%;
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
  }
  .text {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    width: 200px;
    .name {
      width: 100%;
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .artist-name {
      color: gray;
      font-size: 12px;
    }
  }
}
</style>

<template>
  <div>
    <div class="container">
      <div class="title">相关推荐</div>
      <div class="mv-item" v-for="item in mvList" @click="refresh(item.id)">
        <div class="img-cont">
          <img :src="item.cover" alt>
          <p class="playCount">
            <span class="logo">
              <img src="../../assets/playcount.png" alt>
            </span>
            <span class="num">{{item.playCount}}</span>
          </p>
        </div>
        <div class="text">
          <p class="name">{{item.name}}</p>
          <p class="artist-name">{{item.artistName}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: []
    };
  },
  props: {
    mvList: Array
  },
  methods: {
    refresh(id) {
      location.hash = "mvdetail?id=" + id;
      this.$emit("refresh", id);
    }
  },
  created() {
    // let has = location.hash.split("?")[1];
    // let obj = {};
    // has.split("&").forEach(item => {
    //   obj[item.split("=")[0]] = item.split("=")[1];
    // });
  }
};
</script>

