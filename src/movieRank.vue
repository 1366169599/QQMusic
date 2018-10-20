<style lang='less' scoped>
.container{
    display: flex;
    margin: 0 auto;
    flex-wrap: wrap;
    .move {
  display: flex;
  margin: 15px;
  .img {
    width: 100px;
    height: 150px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .content {
    width: 350px;
    height: 150px;
  }
}
}

</style>

<template>
    <div>
        <div class="container">
        <div class="move" v-for="move in moves">
            <div class="img">
                <img :src="move.cover" alt="">
            </div>
            <div class="content">
                <h4>{{move.title}}</h4>
                <p>
                    <span>导演：{{move.directors}}</span>
                    <span>主演：{{move.casts}}</span>
                </p>
                <p>评分：{{move.rate}}</p>
            </div>
        </div>
        </div>
    </div>
</template>
<script>

export default {
  data() {
    return {
      moves: [
        {
          cover: "../assets/musicPlate2.jpg",
          title: "阿凡达",
          directors: "赵毅",
          casts: '',
          rate:'',
        }
      ]
    };
  },
  created(){
      this.$axios({
          method:'get',
          url:'http://192.168.1.103:3000/ajax/movielist'
      }).then(res=>{
          this.moves=res.data
      })
  }
};
</script>

