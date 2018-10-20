<style lang="less">
    .mvs{
        display: flex;
        flex-wrap: wrap;
    .mv-item{
        width: 50%;
        padding-bottom: 20px;
        .img-cont{
            width: 100%;
            height: 120px;
            position: relative;
            img{
                width: 100%;
                height: 100%;
            }
            .playCount{
                width: 100%;
                display: flex;
                justify-content: space-between;
                position: absolute;
                left: 0;
                bottom: 10px;
                span{
                    display: inline-block;
                    font-size: 12px;
                    color: #ffffff;
                    padding: 0 10px;
                }
            }
        }
    }
    }
</style>
<template>
    <div>
        <div class="mvs">
        <div class="mv-item" v-for="mv in mvSize">
            <div class="img-cont">
                <img :src="mv.imgurl" alt="">
                <p class="playCount">
                    <span>{{mv.playCount}}</span>
                    <span>{{mv.publishTime}}</span>
                </p>
            </div>
            <p class="name">{{mv.name}}</p>
        </div>
        </div>
    </div>
</template>
<script>

export default {
  props: ["singerId"],
  data() {
    return {
      mvSize: []
    };
  },
  created() {
    let hash = location.hash;
    this.$axios({
      method: "get",
      url: "/artist/mv?id=" + this.singerId
    }).then(res => {
      this.mvSize = res.data.mvs;
    });
  }
};
</script>
