<style lang="less" scoped>
.mask {
  background: black;
  opacity: 0.3;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.container {
  position: fixed;
  top: 20vh;
  left: 0;
  height: 60vh;
  width: 100%;
  background: white;
  overflow: auto;
  .title-bar {
    height: 60px;
    display: flex;
    justify-content: space-between;
    line-height: 60px;
    padding: 0 15px;
    .title {
      font-size: 20px;
    }
    .choose {
      color: #b8b3b3;
    }
  }
  .collect {
    height: 60px;
    display: flex;
    position: relative;
    .img-cont {
      width: 60px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 10px;
      img {
        width: 80%;
        height: 80%;
        border-radius: 5px;
      }
    }
    .collect-name {
      p {
        line-height: 30px;
        padding-left: 10px;
      }
      .name {
        font-size: 16px;
      }
      .num {
        font-size: 14px;
        color: #b8b3b3;
      }
    }
    .checkbox {
      width: 25px;
      height: 25px;
      box-sizing: border-box;
      border: 1px solid #d1d1d1;
      border-radius: 3px;
      position: absolute;
      top: 10px;
      right: 25px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .hidden-border {
      border: none;
    }
  }
}
</style>
<template>
  <div>
    <div class="mask"></div>
    <div class="container">
      <div class="title-bar">
        <p class="title">收藏到歌单</p>
        <p class="choose">
          <span v-if="clickChoose" @click="tabChoose">多选</span>
          <span v-else @click="chooseEnd">完成{{numbers ? `(${numbers})` : ''}}</span>
        </p>
      </div>
      <div class="collect" v-for="songList in songLists">
        <div class="img-cont">
          <img :src="songList.url" alt>
        </div>
        <div class="collect-name">
          <p class="name">{{songList.name}}</p>
          <p class="num">{{songList.number}}首</p>
        </div>
        <div
          class="checkbox"
          :class="{'hidden-border':songList.hiddenBorder}"
          @click="choosed(songList)"
          v-if="showCheckbox"
        >
          <img src="../assets/choosed.png" alt v-if="songList.show">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      songLists: [
        {
          name: "歌单名",
          number: 123,
          url: require("../assets/musicPlate2.jpg")
        },
        {
          name: "歌单名",
          number: 123,
          url: require("../assets/musicPlate2.jpg")
        },
        {
          name: "歌单名",
          number: 123,
          url: require("../assets/musicPlate2.jpg")
        },
        {
          name: "歌单名",
          number: 123,
          url: require("../assets/musicPlate2.jpg")
        },
        {
          name: "歌单名",
          number: 123,
          url: require("../assets/musicPlate2.jpg")
        },
        {
          name: "歌单名",
          number: 123,
          url: require("../assets/musicPlate2.jpg")
        }
      ],
      clickChoose: true,
      showCheckbox: false
    };
  },
  mounted() {
    this.songLists.forEach(item => {
      this.$set(item, "hiddenBorder", false);
      this.$set(item, "show", false);
    });
  },
  methods: {
    tabChoose() {
      this.clickChoose = !this.clickChoose;
      this.showCheckbox = !this.showCheckbox;
    },
    chooseEnd() {
      this.tabChoose();
    },
    choosed(songList) {
      songList.hiddenBorder = !songList.hiddenBorder;
      songList.show = !songList.show;
    }
  },
  computed: {
    numbers() {
      return this.songLists.filter(item => {
        return item.show;
      }).length;
    }
  }
};
</script>

