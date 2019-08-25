<style lang='less' scoped>
.new-plate{
  .roll-img{
    width: 100%;
    height: 100%;
  }
.classify {
  height: 80px;
  display: flex;
  margin-top: 10px;
  justify-content: space-around;
  a {
    text-decoration: none;
    color: black;
    display: inline-block;
    .img-cont{
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
          width: 70%;
          height: 70%;
        }
    }
  }
  p {
    text-align: center;
  }
}
.generalize {
  height: 150px;
  display: flex;
  margin-top: 10px;
  .m-station {
    width: 40%;
    background: violet;
    position: relative;
    .text {
      padding-top: 110px;
      padding-left: 35px;
      font-size: 18px;
      color: white;
    }
    .on-off {
      img {
        width: 30px;
        height: 30px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
  .album {
    width: 60%;
    margin: 0 10px;
    box-sizing: border-box;
    .num-album {
      margin-top: 10px;
    }
    .new-song {
      display: flex;
      height: 70px;
      background: rgb(240, 239, 239);
      justify-content: space-between;
      .text {
        padding: 20px 10px;
      }
      .img {
        width: 70px;
        height: 70px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
// .container {
//   display: flex;
//   justify-content: space-between;
//   flex-wrap: wrap;
//   .demo {
//     width: 33%;
//     margin: 10px 0;
//     .title {
//       width: 90%;
//       white-space: nowrap;
//       overflow: hidden;
//       text-overflow: ellipsis;
//     }
//     .img {
//       position: relative;
//       .collect-img {
//         width: 20px;
//         height: 20px;
//         position: absolute;
//         right: 5px;
//         bottom: 5px;
//         img {
//           width: 100%;
//           height: 100%;
//           cursor: pointer;
//           &:hover {
//             transform: scale(1.1);
//           }
//         }
//       }
//       img {
//         width: 100%;
//       }
//     }
//   }
// }
}
</style>

<template>
  <div class="new-plate">
    <div>
      <el-carousel :interval="2000" height="150px" ref='carousel'>
        <el-carousel-item v-for="item in items">
          <img class="roll-img" :src="item.img" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="classify">
      <router-link v-for="category in categorys" :to='category.link'>
        <div class="img-cont">
        <img :src="category.img" alt="">
        </div>
        <p>{{category.name}}</p>
      </router-link>
    </div>
    <div class="generalize">

      <div class="m-station">
        <div class="on-off" @click="playSongs(newsong[0],newsong)">
          <!-- <audio :src="radioStation" ref='stationRadio'></audio> -->
          <img src="../../assets/stop.png" alt="" class="on-off-log" v-if="stop">
          <img src="../../assets/play.png" alt="" class="on-off-log" v-else>
        </div>
        <p class="text">个性电台</p>
      </div>

      <div class="album">
        <div class="new-song">
          <div class="text">
            <p>新歌新碟</p>
            <p>哈哈哈哈哈哈哈</p>
          </div>
          <div class="img"><img src="../../assets/face2.gif" alt=""></div>
        </div>
        <div class="new-song num-album">
          <div class="text">
            <p>数字专辑</p>
            <p>哈哈哈哈哈哈</p>
          </div>
          <div class="img"><img src="../../assets/face3.gif" alt=""></div>
        </div>
      </div>
    </div>
    <!-- <div class="container">
      <div class="demo" v-for="plate in plates.slice(0,6)">
        <div class="img">
          <div class="collect-img" @click="likeMusic(plate)">
            <img :src="plate.collect? redHeart : greyHeart" alt="">
          </div>
          <a :href="plate.content">
            <img :src="plate.url" alt="">
          </a>
        </div>
        <h4 class="title">{{plate.name}}</h4>
        <div>{{plate.singer}}</div>
      </div>
    </div> -->
    <personalized></personalized>
    <recommendDj></recommendDj>
  </div>
</template>
<script>

import { Carousel, CarouselItem } from "element-ui";
import personalized from "./personalized.vue";
import recommendDj from "./recommendDj.vue";


export default {
  data() {
    return {
      categorys: [
        { img: require("../../assets/singer.png"), name: "歌手", link: "singer" },
        { img: require("../../assets/ranking.png"), name: "排行榜", link: "topList" },
        { img: require("../../assets/cat.png"), name: "分类歌单", link: "songList" },
        { img: require("../../assets/radio.png"), name: "电台", link: "djRadios" },
        { img: require("../../assets/video.png"), name: "歌手", link: "singer" }
      ],
      stop: false,
      radioStation: "",
      items: [
        {
          img: "./assets/carousel/1.jpeg"
        },
        {
          img: "./assets/carousel/2.jpg"
        },
        {
          img: "./assets/carousel/3.jpeg"
        },
        {
          img: "./assets/carousel/4.jpeg"
        }
      ],
      newsong:[]
    };
  },
  created() {
       this.$axios({
        method:'get',
        url:'/playlist/detail?id=2578068117'
      }).then(res=>{
        this.newsong=res.data.playlist.tracks
      })
  },
  methods: {
    // likeMusic(plate) {
    //   this.$axios({
    //     method: "get",
    //     url: "http://101.236.45.250:3000/ajax/collect?id=" + plate._id
    //   }).then(res => {
    //     if (res.data.code == 200) {
    //       plate.collect = !plate.collect;
    //     }
    //   });
    // },
    // notLike(plate) {
    //   plate.collect = true;
    // }
    playSongs(song,songs) {
      this.playMusic(song,songs)
      this.stop = !this.stop;
    }
  },
  components: {
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem,
    personalized,
    recommendDj,
  }
};
</script>

