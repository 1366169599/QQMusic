<style lang="less" scoped>
.picture {
    height: 610px;;
    display: flex;
    justify-content: center;
    align-items: center;
    .plate {
      width: 300px;
      height: 300px;
      background: black;
      border-radius: 150px;
      display: flex;
      justify-content: center;
      align-items: center;
      animation: rotation 15s linear infinite;
      @keyframes rotation {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      .img-cont {
        width: 200px;
        height: 200px;
        border-radius: 100px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>

<template>
    <div>
            <div class="picture">
                <div class="plate">
                    <div class="img-cont">
                        <img :src="$store.state.song.al.picUrl" alt="">
                    </div>
                </div>
            </div>
    </div>
</template>
