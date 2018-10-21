<style lang="less" scoped>
.singer {
  .top-bar {
    height: 50px;
    display: flex;
    justify-content: space-between;
    .img-cont {
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 30px;
        height: 30px;
      }
    }
    .cat {
      display: flex;
      align-items: center;
      span {
        display: block;
        height: 30px;
        width: 80px;
        text-align: center;
        border: 1px solid #d1d1d1;
        line-height: 30px;
      }
    }
  }
  .singer-list {
    a {
      text-decoration: none;
      color: black;
    }
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
      <div class="img-cont" @click="goBack">
        <img src="../../assets/arrows.png" alt="">
        </div>
      <div class="cat">
        <span>歌手</span>
        <span>我的</span>
      </div>
      <div class="img-cont"><img src="../../assets/searchblack.png" alt=""></div>
    </div>
    <singerCategory :cates='districtCates' @search='searchMusic'></singerCategory>
    <singerCategory :cates='sexCates' @search='searchMusic'></singerCategory>
    <singerCategory :cates='styleCates' @search='searchMusic'></singerCategory>
    <!-- <singerCategory :cates='sexCates'></singerCategory>
    <singerCategory :cates='styleCates'></singerCategory> -->
    <div class="singer-list">
      <router-link v-for="singer in singerList" class="singer" :to=' "/singerMusic?id=" + singer.id'>
        <div class="singer-img">
          <img :src="singer.img1v1Url" alt="">
        </div>
        <p>{{singer.name}}</p>
      </router-link>
    </div>
  </div>
</template>
<script>

import singerCategory from "./singerCategory.vue";
export default {
  data() {
    return {
      singerList: [],
      districtCates: [
        { name: "华语男", id: 1001 },
        { name: "华语女", id: 1002 },
        { name: "华语组合/乐队", id: 1003 }
      ],
      sexCates: [
        { name: "欧美男", id: 2001 },
        { name: "欧美女", id: 2002 },
         { name: "欧美组合/乐队", id: 2003 }
      ],
      styleCates: [
        { name: "其他男", id: 4001 },
        { name: "其他女", id: 4002 },
         { name: "其他组合/乐队", id: 4031 }
         ]
    };
  },
  methods: {
     request(id) {
      let url = "/artist/list";
      if (id) {
        url = "/artist/list?cat=" + id;
      }
      this.$axios({
        method: "get",
        url: url
      }).then(res => {
        this.singerList = res.data.artists;
      });
    },
    searchMusic(cate) {
      this.request(cate.id);
    },
    // goBack(){
    //   history.back()
    // }
    
   
  },
  created() {
    this.request();
  },
  components: {
    singerCategory
  }
};
</script>

