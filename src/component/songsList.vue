<style lang="less" scoped>
.container {
    border-radius: 20px 20px 0 0;
  .song {
    position: relative;
    border-bottom: 1px solid #d1d1d1;
    display: flex;
    justify-content: space-between;
    .num {
      height: 50px;
      width: 50px;
      text-align: center;
      line-height: 50px;
    }
    .song-demo {
      flex: 1;
      height: 50px;
      p{
          width: 250px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
      }
      .song-name {
        margin-top: 5px;
      }
      .song-author {
        font-size: 12px;
        color: gray;
      }
    }
    .pop-menu {
      width: 50px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      transform: rotate(90deg);
    }
  }
}
</style>
<template>
  <div>
    <div class="container">
      <div class="song" v-for="(item,index) in items">
        <div class="num">{{index+1}}</div>
        <div class="song-demo" @click="playMusic(item,items)">
          <p class="song-name">{{item.name}}</p>
          <p class="song-author">
              {{item.ar.map(element=>{
                  return element.name
              }).join('/')}}-{{item.al.name}}
          </p>
        </div>
        <div class="pop-menu" @click="showPopMenu(item)">···</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    props:{
        items:Array,
    },
  data() {
    return {
    
    };
  },
  methods: {
    showPopMenu(item) {
      this.$emit('foo',item)
    }
  }
};
</script>

