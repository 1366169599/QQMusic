<style lang="less" scoped>
     .arrows{
      width: 60px;
      height: 60px;
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10;
      img{
          width: 70%;
          height: 70%;
      }
  }
    .singer-information{
        height: 300px;
        position: relative;
        img{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 300px;
        }
        .artist{
            width: 210px;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: 180px;
            color: white;
            .name{
                font-size: 30px;
                text-align: center;
                margin: 10px 0;
            }
            .attention{
                span{
                    display: inline-block;
                    width: 100px;
                    height: 25px;
                    border: 1px solid green;
                    border-radius: 25px;
                    text-align: center;
                    padding: 2px 0;
                }
            }
        }
    }
    .singer-music{
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid gray;
        border-top: 1px solid gray;
        p{
            display: flex;
            span{
                display: inline-block;
                width: 25%;
                text-align: center;
            }
        }
    }
</style>
<template>
    <div>
         <div class="arrows" @click="goBack">
                <img src="../../assets/arrowsWhite.png" alt="">
            </div>
        <div class="singer-information">
            <img :src="backgrond" alt="">
            <div class="artist">
            <p class="name">{{name}}</p>
            <p class="attention">
                <span>关注</span>
                <span>勋章</span>
            </p>
            </div>
        </div>
        <div class="singer-music">
           <p>
               <span @click="tabShow(1)" >歌曲{{musicSize}}</span>
               <span @click="tabShow(2)" >专辑{{albumSize}}</span>
               <span @click="tabShow(3)" >MV{{mvSize}}</span>
               <span @click="tabShow(4)" >详情</span>
           </p>
        </div>
        <musicSize v-if="show==1"></musicSize>
        <albumSize :singerId='singerId' v-else-if="show==2"></albumSize>
        <mvSize :singerId='singerId' v-else-if="show==3"></mvSize>
        <singerIntroduce :singerId='singerId' v-else></singerIntroduce>
    </div>
</template>
<script>

import musicSize from '../singerMusic/musicSize.vue';
import albumSize from '../singerMusic/albumSize.vue';
import mvSize from '../singerMusic/mvSize.vue';
import singerIntroduce from '../singerMusic/singerIntroduce.vue'; 
export default {
  data() {
    return {
      name: "",
      backgrond:'',
      musicSize:'',
      albumSize:'',
      mvSize:'',
      singerId:'',
      show:1,
    };
  }, 
  created() {
    let queryParam = location.hash.split("?")[1];
    let obj = {};
    queryParam.split("&").forEach(param => {
      obj[param.split("=")[0]] = param.split("=")[1];
    });
    this.singerId=obj.id;
    this.$axios({
      method: "get",
      url: "/artists?id=" + obj.id
    }).then(res => {
      this.name = res.data.artist.name;
      this.backgrond=res.data.artist.picUrl;
      this.musicSize=res.data.artist.musicSize;
      this.albumSize=res.data.artist.albumSize;
      this.mvSize=res.data.artist.mvSize;
    });
  },
  methods:{
      tabShow(show){
          this.show=show;
      }
  },
  components:{
      musicSize,
      albumSize,
      mvSize,
      singerIntroduce
  }
};
</script>
