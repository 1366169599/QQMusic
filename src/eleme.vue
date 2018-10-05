<template>
    <div>
        <el-radio v-model="radio" label="1">备选项</el-radio>
        <el-radio v-model="radio" label="2">备选项</el-radio>
        <div class='aaa'>
            <el-input-number v-model="num1" @change="handleChange" :min="5" :max="10" label="描述文字"></el-input-number>
        </div>
        <div class='aaa'></div>
        <el-tooltip class="item" effect="dark" ref='ToolTip' content="Top Left 提示文字" placement="top-start">
            <el-button>上左</el-button>
        </el-tooltip>
        <div class='carousel-cont'>
        <el-carousel :interval="4000" type="card" height="200px" :autoplay='false' ref='carousel'>
            <el-carousel-item v-for="(item,index) in items">
                <img :src="item.img" alt="">
                <h1>sajflkasjd</h1>
            </el-carousel-item>
        </el-carousel>
        </div>
    </div>
</template>
<script>
import {Radio,InputNumber,Carousel,CarouselItem,Button,Tooltip} from 'element-ui';
import Vue from 'vue';

Vue.component(Radio.name, Radio);
Vue.component(InputNumber.name, InputNumber);
Vue.component(Carousel.name, Carousel);
Vue.component(CarouselItem.name, CarouselItem);
Vue.component(Button.name, Button);
Vue.component(Tooltip.name, Tooltip);
export default {
  data() {
    return {
      radio: "1",
      num1: 1,
      items:[{
          img:'./assets/roll1.jpeg'
      },{
          img:'./assets/roll2.jpeg'
      },{
          img:'./assets/roll3.jpeg'
      },{
          img:'./assets/roll4.jpg'
      },]
    };
  },
  methods: {
    handleChange(value) {
        let carousel = this.$refs.carousel;
        carousel.next();
      console.log(1245);
    //   this.$refs.ToolTip.test();
    }
  }
};
</script>
<style lang="less">
.carousel-cont {
    width: 1000px;
    img {
        width: 100%;
        height: 100%;
    }
}
.aaa {
  .el-icon-time:before {
    content: "";
    background: url("");
    background-size: 100% 100%;
  }
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>



