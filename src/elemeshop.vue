<style lang=less>
.header {
  height: 134px;
  background: aqua;
  .shop-name {
    padding: 5%;
    background: aquamarine;
    display: flex;
    .shop-log{
        width: 64px;
        height: 64px;
        img{
            width: 64px;
            height: 64px;
        }
    }
    .name{
        margin-left: 25px;
    }
  }
  .shop-introduce{  
      p{
          font-size: 0;
          padding: 5px 10px;
         
          .info {
              font-size: 10px;
               width: 80%;
               display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          vertical-align: middle;
          padding-left: 10px;
          }
          .advertise{
          vertical-align: middle;
          background: aliceblue;
          padding: 1px;
          font-size: 8px;
      }
      }
  }
}
.tab-border{
    height: 40px;
    background: greenyellow;
    ul{
        display: flex;
        list-style: none;
        justify-content: space-around;
        a{
            text-decoration: none;
            display: block;
            padding: 5px 0;
        }
    }
}
</style>

<template>
    <div>
        <div class="header">
            <div class="shop-name">
                <div class="shop-log">
                    <img src="../assets/musicPlate2.jpg" alt="">
                </div>
                <div class="name">
                    <h3>州品香坊（回龙观）</h3>
                    <p>蜂鸟专送</p>
                    <p>在线支付满20减5</p>
                </div>
            </div>
            <div class="shop-introduce">
                <p>
                    <span class='advertise'>公告</span>
                    <span class='info'>粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。
                    </span>
                </p>
            </div>
        </div>
        <div class="tab-border">
            <ul>
                <li><a href="">商品</a></li>
                <li><a href="">评论</a></li>
                <li><a href="">商家</a></li>
            </ul>
        </div>
        <commodity></commodity>
    </div>
</template>
<script>
import commodity from './commodity.vue'
export default {
    data(){
        return{

        }
    },
    components:{
        commodity
    }
}
</script>

