<style lang="less">
.music-container {
  .my-music {
    display: flex;
    margin: 15px 0;
    flex-wrap: wrap;
    .local-music {
      width: 33.3%;
      text-align: center;
      img {
        width: 30px;
        height: 30px;
      }
    }
  }
}
</style>


<template>
    <div>
        <div class="music-container">
            <div class="my-music">
                <div class="local-music">
                    <img src="../../assets/音乐 .png" alt="">
                    <p>本地音乐</p>
                    <p>90</p>
                </div>
                <div class="local-music">
                    <img src="../../assets/下载.png" alt="">
                    <p>下载音乐</p>
                    <p>90</p>
                </div>
                <div class="local-music">
                    <img src="../../assets/时间.png" alt="">
                    <p>最近播放</p>
                    <p>90</p>
                </div>
                <div class="local-music">
                    <img src="../../assets/心 .png" alt="">
                    <p>我喜欢</p>
                    <p>90</p>
                </div>
                <div class="local-music">
                    <img src="../../assets/购买.png" alt="">
                    <p>已购音乐</p>
                    <p>90</p>
                </div>
                <div class="local-music">
                    <img src="../../assets/跑步.png" alt="">
                    <p>跑步电台</p>
                    <p>90</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return{

        }
    },
    // components:{
    //     selfList,
    //     collectList
    // }
}
</script>

