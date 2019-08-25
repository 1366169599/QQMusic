<style lang="less" scoped>
.title {
  text-align: center;
    line-height: 60px;
}
.djRadios {
  display: flex;
  flex-wrap: wrap;
  .dj-item {
    margin-left: -1px;
    margin-top: -1px;
    width: 50%;
    height: 50px;
    display: flex;
    border: 1px solid #d1d1d1;
    box-sizing: border-box;
    .img-cont {
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 60%;
        height: 60%;
      }
    }
    .name {
      line-height: 50px;
      padding-left: 10px;
    }
  }
}
</style>

<template>
    <div>
        <h2 class="title">热门分类</h2>
        <div class="djRadios">
            <div class="dj-item" v-for="djRadio in djRadios.slice(0,6)">
                <div class="img-cont">
                    <img :src="djRadio.pic56x56Url" alt="">
                </div>
                <div class="name">{{djRadio.name}}</div>
            </div>
        </div>
        <h2 class="title">更多分类</h2>
        <div class="djRadios">
            <div class="dj-item" v-for="djRadio in djRadios.slice(7)">
                <div class="img-cont">
                    <img :src="djRadio.pic56x56Url" alt="">
                </div>
                <div class="name">{{djRadio.name}}</div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
  data() {
    return {
      djRadios: []
    };
  },
  created() {
    this.$axios({
      method: "get",
      url: "/dj/catelist"
    }).then(res => {
    //   console.log(res.categories);
      this.djRadios = res.data.categories;
    });
  }
};
</script>
