<style lang="less" scoped>
.container {
  .title-bar {
    height: 50vh;
    width: 100%;
    position: relative;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
<template>
  <div>
    <div class="container">
      <div class="title-bar">
        <img :src="data.coverImgUrl" alt>
      </div>

      <songsList :items='songs' @educe='educe'></songsList>
      <songMenu :show='show' :song='song' @close='closePop'></songMenu>
    </div>
  </div>
</template>
<script>
import songsList from "../component/songsList.vue";
import songMenu from "../component/pop-up.vue";
export default {
  data() {
    return {
      index: "",
      data: {},
      songs:[],
      show:false,
      song:{}
    };
  },
  created() {
    let has = location.hash.split("?")[1];
    let obj = {};
    has.split("&").forEach(item => {
      obj[item.split("=")[0]] = has.split("=")[1];
    });
    this.index = obj.idx;
    this.$axios({
      method: "get",
      url: "/top/list?idx=" + this.index
    }).then(res => {
      this.data = res.data.playlist;
      this.songs=this.data.tracks
    });
  },
  methods:{
      educe(item){
          this.song=item;
          this.show=true
      },
      closePop(){
          this.show=false
      }
  },
  components: {
    songsList,
    songMenu
  }
};
</script>
