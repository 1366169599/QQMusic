<style lang="less">
.catlist {
  .cat-list {
      text-align: center;
    .title {
      height: 50px;
      text-align: center;
      color: green;
      border: 1px solid green;
    }
    .cat {
        border: 1px solid transparent;
      .name {
        width: 25%;
        height: 100px;
        float: left;
        line-height: 100px;
        color: gray;
      }
      span {
        display: inline-block;
        height: 50px;
        width: 25%;
        line-height: 50px;
        color: black;
        float: left;
        box-sizing: border-box;
        border: 1px solid #d1d1d1;
        border-right: none;
        border-bottom: none;
     

      }
      .clear {
        clear: both;
      }
    }
  }
}
</style>

<template>
    <div class="catlist">
        <div class="cat-list">
            <div class="title">
                <h1>全部歌单</h1>
            </div>
            <div class="cat">
                <div class="name">语种</div>
                <span v-for="cat in catlist.filter((item)=>{return item.category==0})" @click="chooseSongList(cat)">{{cat.name}}</span>
                <div class="clear"></div>
            </div>

            <div class="cat">
                <div class="name">风格</div>
                <span v-for="cat in catlist.filter((item)=>{return item.category==1})" @click="chooseSongList(cat)">{{cat.name}}</span>
                <div class="clear"></div>

            </div>

            <div class="cat">
                <div class="name">场景</div>
                <span v-for="cat in catlist.filter((item)=>{return item.category==2})" @click="chooseSongList(cat)">{{cat.name}}</span>
                <div class="clear"></div>

            </div>
            <div class="cat">
                <div class="name">情感</div>
                <span v-for="cat in catlist.filter((item)=>{return item.category==3})" @click="chooseSongList(cat)">{{cat.name}}</span>
                <div class="clear"></div>

            </div>
            <div class="cat">
                <div class="name">主题</div>
                <span v-for="cat in catlist.filter((item)=>{return item.category==4})" @click="chooseSongList(cat)">{{cat.name}}</span>
                <div class="clear"></div>

            </div>

        </div>
    </div>
</template>
<script>

export default {
  data() {
    return {
      catlist: []
    };
  },
    methods:{
      chooseSongList(cat){
          this.$router.push({ path: 'songList', query: { cat: cat.name }})
      }
    },
  created() {
    this.$axios({
      method: "get",
      url: "/playlist/catlist"
    }).then(res => {
      console.log(res.data);
      this.catlist = res.data.sub;
    });
  }
};
</script>

