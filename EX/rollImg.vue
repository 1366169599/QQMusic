<style lang='less' scoped>
.roll-img {
  margin: 50px auto;
  width: 500px;
  height: 350px;
  position: relative;
  overflow: hidden;

  .container-img {
    font-size: 0;
    position: absolute;
    top: 0;
    left: 0;
    /* overflow: hidden; */
    width: 2000px;
    height: 350px;
    transition: all 1s;
  }
  img {
    width: 500px;
    height: 350px;
  }
}
.slide {
  width: 700px;
  height: 350px;
  margin: 20px auto;
  overflow: hidden;
  ul {
    list-style: none;
    width: 5000px;
    font-size: 0;
    position: relative;
    .slide-item0 {
      opacity: 0;
      transform: translateX(-200px) scale(0.81);;
    }
    .slide-item1 {
      opacity: 0.5;
      transform: translateX(0px)  scale(0.81);
    }
    .slide-item2 {
      opacity: 1;
      transform: translateX(100px)  scale(1);
      z-index: 1;
    }
    .slide-item3 {
      /* opacity: 0; */
      opacity: 0.5;
      transform: translateX(200px) scale(0.81);
    }
    .slide-item4 {
      /* opacity: 0; */
      opacity: 0;
      transform: translateX(200px) scale(0.81);;
    }

    li {
      display: inline-block;
      position: absolute;
      left: 0;
      top: 0;
        transition: transform 2s;
      img {
        width: 500px;
        height: 350px;
      }
    }
  }
}
</style>

<template>
    <div>
        <div class="roll-img">
            <div class="container-img" :style="{'left':left+'px'}">
                <img src="../assets/roll1.jpeg" alt="">
                <img src="../assets/roll2.jpeg" alt="">
                <img src="../assets/roll3.jpeg" alt="">
                <img src="../assets/roll4.jpg" alt="">
            </div>
        </div>
        <div class="slide">
            <ul>
                <li  :class="'slide-item'+index(0)"><img src="../assets/roll1.jpeg" alt=""></li>
                <li :class="'slide-item'+index(1)"><img src="../assets/roll2.jpeg" alt="" ></li>
                <li :class="'slide-item'+index(2)"><img src="../assets/roll3.jpeg" alt="" ></li>
                <li :class="'slide-item'+index(3)"><img src="../assets/roll4.jpg" alt="" ></li>
                <li :class="'slide-item'+index(4)"><img src="../assets/roll2.jpeg" alt="" ></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      left: 0,
      leftFlag: true,
      number: 0
    };
  },
  mounted() {
    function moveLeft() {
      console.log(1);
      if (this.left === 0) {
        this.leftFlag = true;
      }
      if (this.left === -1500) {
        this.leftFlag = false;
      }
      if (this.leftFlag) {
        this.left -= 500;
      } else {
        this.left += 500;
      }
    }
    setInterval(moveLeft.bind(this), 1000);
    setInterval(() => {
      this.number += 1;
    }, 2000);
  },
  methods: {
    index(type) {
      return (type + this.number) % 5;
    }
  }
};
</script>

