<style lang="less" scoped>
.roll-img {
  width: 100%;
  height: 100%;
}
.recommend {
  width: 100%;
  margin: 10px;
  ul {
    list-style: none;
    display: flex;
    li {
      margin: 0 10px;
      button {
        display: inline-block;
        width: 60px;
        height: 30px;
        background: #fff;
        border: 1px solid gray;
        border-radius: 15px;
        outline: none;
      }
    }
  }
}
</style>
<template>
    <div>
        <div>
            <el-carousel :interval="1500" height="200px" ref='carousel'>
                <el-carousel-item v-for="(item,index) in items">
                    <img class="roll-img" :src="item.img" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="recommend">
            <ul>
                <li>
                    <button>推荐</button>
                </li>
                <li>
                    <button>视频</button>
                </li>
                <li>
                    <button>文章</button>
                </li>
            </ul>
        </div>
        <div>
            
        </div>
    </div>
</template>
<script>
import { Carousel, CarouselItem } from "element-ui";

export default {
  data() {
    return {
      items: [
        {
          img: "./assets/roll1.jpeg"
        },
        {
          img: "./assets/roll2.jpeg"
        },
        {
          img: "./assets/roll3.jpeg"
        },
        {
          img: "./assets/roll4.jpg"
        }
      ]
    };
  },
  components: {
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem
  }
};
</script>
