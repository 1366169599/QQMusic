<style lang="less" scoped>
.mask {
  background: black;
  opacity: 0.3;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.song-menu-cont {
  height: 60vh;
  width: 100%;
  position: fixed;
  bottom: 0;
  background: white;
  border-radius: 10px 10px 0 0;
  overflow: auto;
  z-index: 10;
  p {
    height: 60px;
    border-bottom: 1px solid #d1d1d1;
    line-height: 60px;
    padding-left: 10px;
  }
}
</style>

<template>
  <div>
    <div class="mask" v-if="show" @click="closePop" @touchmove.prevent></div>
    <div class="song-menu-cont" v-if="show">
      <p>歌曲:{{song.name}}</p>
      <p>下一首播放</p>
      <p>收藏到歌单</p>
      <p>下载</p>
      <p>评论({{song.cp}})</p>
      <p>分享</p>
      <p>
        歌手:{{song.ar.map(item=>{
        return item.name}).join('-')}}
      </p>
      <router-link tag="p" :to="'albumCont?id='+song.al.id">专辑:{{song.al.name}}</router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    show: Boolean,
    song: Object
  },
  data() {
    return {};
  },
  methods: {
    closePop() {
      this.$emit("close");
    }
  }
};
</script>
