<style lang=less>
.classify{
  height: 80px;
  display: flex;
  justify-content: space-between;
  p{
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
    .num-album{
      margin-top: 10px;
    }
    .new-song {
      display: flex;
      height: 70px;
      background: rgb(240, 239, 239);
      justify-content: space-between;
      .text{
        padding: 20px 10px;
      }
      .img{
        width: 70px;
        height: 70px;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
.container {
  display: flex;
  justify-content: space-between;
  .demo {
    width: 33%;
    margin: 10px 0;
    .title {
      width: 90%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .img {
      position: relative;
      .collect-img {
        width: 20px;
        height: 20px;
        position: absolute;
        right: 5px;
        bottom: 5px;
        img {
          width: 100%;
          height: 100%;
          cursor: pointer;
          &:hover {
            transform: scale(1.1);
          }
        }
      }
      img {
        width: 100%;
      }
    }
  }
}
</style>

<template>
  <div>
    <div>
      <el-carousel :interval="2000" height="150px" ref='carousel'>
        <el-carousel-item v-for="item in items">
          <img class="roll-img" :src="item.img" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="classify">
      <div v-for="category in categorys">
        <img :src="category.img" alt="">
        <p>{{category.name}}</p>
      </div>
    </div>
    <div class="generalize">
      <div class="m-station">
        <div class="on-off" @click="onOff">
          <audio :src="radioStation" ref='stationRadio'></audio>
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
    <div class="container">
      <div class="demo" v-for="plate in plates.slice(0,6)">
        <div class="img">
          <div class="collect-img" @click="likeMusic(plate)">
            <img :src="plate.collect? redHeart : greyHeart" alt="">
            <!-- <img :src="plate.collect? 'http://7xt129.com1.z0.glb.clouddn.com/heart-red.png' : 'http://7xt129.com1.z0.glb.clouddn.com/heart-grey.png'" alt=""> -->
          </div>
          <!-- <div class="collect-img" v-else @click="notLike(plate)">
                        <img src="../assets/heart-red.png" alt="">
                    </div> -->
          <a :href="plate.content">
            <img :src="plate.url" alt="">
          </a>
        </div>
        <h4 class="title">{{plate.name}}</h4>
        <div>{{plate.singer}}</div>
      </div>
    </div>
  </div>
</template>
<script>
let axios = require("axios");
import { Carousel, CarouselItem } from "element-ui";

export default {
  data() {
    return {
      categorys:[{img:'../../assets/心 .png',name:'歌手'},
      {img:'../../assets/心 .png',name:'歌手'},
      {img:'../../assets/心 .png',name:'歌手'},
      {img:'../../assets/心 .png',name:'歌手'},
      {img:'../../assets/心 .png',name:'歌手'}
      ],
      stop: false,
      radioStation: "",
      items: [
        {
          img: "./assets/roll1.jpeg"
        },
        {
          img: "./assets/roll2.jpeg"
        },
        {
          img: "./assets/roll3.jpeg"
        },
        {
          img: "./assets/roll4.jpg"
        }
      ],
      redHeart: require("../../assets/heart-red.png"),
      greyHeart: require("../../assets/heart-grey.png"),
      plates: [
        {
          url:
            "https://raw.githubusercontent.com/1366169599/QQMusic/gh-pages/assets/musicPlate2.jpg",
          title: "如何",
          singer: "张韶涵",
          collect: false
        },
        {
          url:
            "https://raw.githubusercontent.com/1366169599/QQMusic/gh-pages/assets/musicPlate2.jpg",
          title: "如何",
          singer: "张韶涵",
          collect: false
        },
        {
          url:
            "https://raw.githubusercontent.com/1366169599/QQMusic/gh-pages/assets/musicPlate2.jpg",
          title: "如何",
          singer: "张韶涵",
          collect: false
        },
        {
          url:
            "https://raw.githubusercontent.com/1366169599/QQMusic/gh-pages/assets/musicPlate2.jpg",
          title: "如何",
          singer: "张韶涵",
          collect: false
        },
        {
          url:
            "https://raw.githubusercontent.com/1366169599/QQMusic/gh-pages/assets/musicPlate2.jpg",
          title: "如何",
          singer: "张韶涵",
          collect: false
        }
      ]
    };
  },
  created() {
    // this.value='new platesajdfljasldfjsaldfjlsad'
    // this.$emit('input',this.value);
    axios({
      method: "get",
      url: "http://101.236.45.250:4000/music/url?id=397011"
    }).then(res => {
      console.log(res);
      this.radioStation = res.data.data[0].url;
      console.log(this.radioStation);
    });
    if (!sessionStorage.getItem("key")) {
      axios({
        method: "get",
        url: "http://101.236.45.250:3000/ajax/musiclist"
      }).then(res => {
        this.plates = res.data;
        sessionStorage.setItem("key", JSON.stringify(res.data));
      });
    } else {
      this.plates = JSON.parse(sessionStorage.getItem("key"));
    }
  },
  methods: {
    likeMusic(plate) {
      axios({
        method: "get",
        url: "http://101.236.45.250:3000/ajax/collect?id=" + plate._id
      }).then(res => {
        if (res.data.code == 200) {
          plate.collect = !plate.collect;
        }
      });
    },
    // notLike(plate) {
    //   plate.collect = true;
    // }
    onOff() {
      if (this.stop) {
        this.$refs.stationRadio.pause();
      } else {
        this.$refs.stationRadio.play();
      }
      this.stop = !this.stop;
    }
  },
  components: {
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem
  }
};
</script>

