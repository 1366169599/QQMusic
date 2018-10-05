<style lang=less>
.container {
  display: flex;
  justify-content: space-between;
  .demo {
    width: 33%;
    .title{
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

        <div class="container">
            <div class="demo" v-for="plate in plates">
                <div class="img">
                    <div class="collect-img" @click="likeMusic(plate)">
                        <img :src="plate.collect? '../assets/heart-red.png' : '../assets/heart-grey.png'" alt="">
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

export default {
  data() {
    return {
      plates: [
        {
          url: "https://raw.githubusercontent.com/1366169599/QQMusic/gh-pages/assets/musicPlate2.jpg",
          title: "如何",
          singer: "张韶涵",
          collect: false
        },
        {
          url: "https://raw.githubusercontent.com/1366169599/QQMusic/gh-pages/assets/musicPlate2.jpg",
          title: "如何",
          singer: "张韶涵",
          collect: false
        },
        {
          url: "https://raw.githubusercontent.com/1366169599/QQMusic/gh-pages/assets/musicPlate2.jpg",
          title: "如何",
          singer: "张韶涵",
          collect: false
        },
        {
          url: "https://raw.githubusercontent.com/1366169599/QQMusic/gh-pages/assets/musicPlate2.jpg",
          title: "如何",
          singer: "张韶涵",
          collect: false
        },
        {
          url: "https://raw.githubusercontent.com/1366169599/QQMusic/gh-pages/assets/musicPlate2.jpg",
          title: "如何",
          singer: "张韶涵",
          collect: false
        }
      ]
    };
  },
  created() {
    axios({
      method: "get",
      url: "http://101.236.45.250:3000/ajax/musiclist"
    }).then(res => {
      console.log(res.data);
      this.plates = res.data;
    });
  },
  methods: {
    likeMusic(plate) {
        axios({
            method:'get',
            url:'http://101.236.45.250:3000/ajax/collect?id='+plate._id
        }).then(res=>{
            if(res.data.code==200){
      plate.collect = !plate.collect;
            }
        })
    },
    // notLike(plate) {
    //   plate.collect = true;
    // }
  }
};
</script>

