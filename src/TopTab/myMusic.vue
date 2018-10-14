<style lang="less">
.user {
  height: 100px;
  .user-name {
    width: 100%;
    text-align: center;
    padding: 10px 0;
  }
  .member {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
}
.music-container {
  .my-music {
    display: flex;
    margin: 15px 0;
    flex-wrap: wrap;
    .local-music {
      width: 33.3%;
      text-align: center;
      img {
        width: 50px;
        height: 50px;
      }
    }
  }
}
.song-list{
    text-align: center;
    font-size: 20px;
    color: gray;
    span{
        margin: 0 10px;
    }
}
</style>


<template>
    <div>
        <div class="user">
            <div class="user-name">
                <img src="" alt="">
                <span>向远</span>
                <span></span>
            </div>
            <div class="member">
                <div>
                    <p>活动中心</p>
                    <p>今日听歌0分钟</p>
                </div>
                <div style="font-size:32px">|</div>
                <div>
                    <p>会员中心</p>
                    <p>免费下载独家歌曲</p>
                </div>
            </div>
        </div>
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
        <div class="song-list">
            <span>自建歌单</span>
            <span>|</span>
            <span>收藏歌单</span>
        </div>
        <!-- <selfList></selfList>
        <collectList></collectList> -->
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

