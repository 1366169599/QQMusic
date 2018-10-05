<style lang=less>
.container {
  /* background: gray; */
  width: 100%;
  position: absolute;
  top: 174px;
  left: 0;
  bottom: 40px;
  display: flex;
  .menu {
      flex: 0 0 80px;
    height: 100%;
    background: #f3f5f7;
    ul {
      list-style: none;
      li {
        padding: 10px 5px;
        border-bottom: 1px solid gray;
        a {
          text-decoration: none;
        }
      }
    }
  }
  .foods{
      ul{
          list-style: none;
      }
      .foods-item{
          margin-left: 20px;
          padding: 20px 0;
          display: flex;
          border-bottom: 1px solid gray;

          .foods-img{
              height: 57px;
              flex: 0 0 57px;
              img{
                  width: 100%;
                  height: 100%;
              }
          }
          .foods-name{
              margin-left: 15px;
              flex: 1 1 auto;
              .price{
                  display: flex;
                  justify-content:space-between;
                  padding:0 20px 0 0;
              }
          }
      }

  }
}
</style>

<template>
    <div>
        <div class="container">
            <div class='menu'>
                <ul>
                   <li v-for="cate in categorys" @click="chooseCate(cate)">{{cate}}</li>
                </ul>
            </div>
            <div class="foods">
                <ul>
                    <li v-for='cate in categorys'>
                        <h4>{{cate}}</h4>
                        <div v-for="food in currentFoods">
                            <div class='foods-item' v-if='cate === food.category'>
                                <div class="foods-img">
                                    <img src="../assets/musicPlate2.jpg" alt="">
                                </div>
                                <div class="foods-name">
                                    <h4 class="name">{{food.name}}</h4>
                                    <p class="smell">{{food.smell}}</p>
                                    <p class="sell"><span>{{food.sell}}</span><span>{{food.evaluate}}%</span></p>
                                    <p class="price"><span>{{food.price}}</span><span>+</span></p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <!-- <ul>
                        <li class="foods-item" v-for="food in currentFoods">
                            
                        </li> 
                    </ul> -->
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            foods:[{
                name:'皮蛋瘦肉粥',
                smell:'咸粥',
                sell:'月售229份',
                evaluate:'好评率100',
                price:'￥10',
                category:'热销榜',
            },{
                name:'皮蛋瘦肉粥',
                smell:'咸粥',
                sell:'月售229份',
                evaluate:'好评率100',
                price:'￥10',
                category:'单人精彩套餐',
            },{
                name:'皮蛋瘦肉粥',
                smell:'咸粥',
                sell:'月售229份',
                evaluate:'好评率100',
                price:'￥10',
                category:'冰爽饮品限时特惠',
            },{
                name:'皮蛋瘦肉粥',
                smell:'咸粥',
                sell:'月售229份',
                evaluate:'好评率100',
                price:'￥10',
                category:'热销榜',
            },],
            categorys:[],
            currentFoods:[],
        }
    },
    mounted(){
        this.categorys=this.foods.map(item => item.category)
        .filter(function(item,index,foods){
            return foods.indexOf(item)==index
        });
        this.currentFoods =this.foods;
    },
    methods:{
        chooseCate(cate){
            // this.currentFoods = this.foods.filter(function(item,index,foods){
            //     return item.category==cate
            // })
        }
    }
}
</script>


[1,2,3].map(function(item) {
    return {
        name:'lsdjfla',
        age:item
    }
})
[{
        name:'lsdjfla',
        age:1,
},{
        name:'lsdjfla',
        age:1,
},{
        name:'lsdjfla',
        age:1,
}]